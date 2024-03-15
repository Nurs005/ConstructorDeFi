// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;

import "./Staking.sol";
import "./StakingV2.sol";

contract StakingFactory {
    Staking stakingInstance;
    StakingV2 stakingV2Instance;

    event StakingDeploed(address);
    event StakingDeploedV2(address);

    function deployStaking(
        address _token,
        uint _rate,
        address initialOwner
    ) external {
        stakingInstance = new Staking(_token, _rate, initialOwner);
        emit StakingDeploed(address(stakingInstance));
    }

    function deployStakingV2(
        address _token,
        uint _rate,
        address initialOwner
    ) external {
        stakingV2Instance = new StakingV2(_token, _rate, initialOwner);
        emit StakingDeploedV2(address(stakingV2Instance));
    }
}
