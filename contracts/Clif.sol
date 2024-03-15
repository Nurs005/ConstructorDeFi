contract Clif {
    struct UnlockInfo {
        uint256 unlockDate;
        uint256 percent;
    }

    struct VestingInfo {
        uint256 totalAmount;
        uint256 withdrawn;
        UnlockInfo[] unlockInfos;
    }

    mapping(address => VestingInfo) public vestings;
    IERC20 public token;

    constructor(
        IERC20 _token,
        address[] memory _addresses,
        uint256[] memory _amounts,
        uint256[] memory _unlockDates, // single array of unlock dates
        uint256[] memory _unlockPercents // single array of unlock percentages
    ) {
        require(
            _addresses.length == _amounts.length &&
                _unlockDates.length == _unlockPercents.length,
            "Input arrays length mismatch"
        );

        token = _token;

        for (uint256 i = 0; i < _unlockDates.length; i++) {
            UnlockInfo memory newUnlockInfo = UnlockInfo({
                unlockDate: _unlockDates[i],
                percent: _unlockPercents[i]
            });

            for (uint256 j = 0; j < _addresses.length; j++) {
                VestingInfo storage vesting = vestings[_addresses[j]];
                vesting.totalAmount = _amounts[j];
                vesting.withdrawn = 0;
                vesting.unlockInfos.push(newUnlockInfo);
            }
        }
    }

    function withdraw() public {
        VestingInfo storage vesting = vestings[msg.sender];

        uint256 totalPercent = 0;
        for (uint256 i = 0; i < vesting.unlockInfos.length; i++) {
            if (block.timestamp >= vesting.unlockInfos[i].unlockDate) {
                totalPercent += vesting.unlockInfos[i].percent;
                vesting.unlockInfos[i].percent = 0;
            }
        }

        require(totalPercent > 0, "No tokens to withdraw");

        uint256 withdrawable = (vesting.totalAmount * totalPercent) / 100;
        require(
            vesting.withdrawn + withdrawable <= vesting.totalAmount,
            "Cannot withdraw more than total amount"
        );
        vesting.withdrawn += withdrawable;

        token.transfer(msg.sender, withdrawable);
    }
}
