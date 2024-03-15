
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract vest is Ownable{

    IERC20 public token;
    
    constructor(address tooken) Ownable(msg.sender){
        token = IERC20(tooken);
    }

    struct Vesting{
        uint amount;
        uint vestingDuration;
        uint startDate;
        bool isReleased;
    }
    uint public duration;

    mapping (address => Vesting) public vestingInfo;

    function durationOfVesting(uint durationDays) public onlyOwner{
        require(duration == 0, "You have already set duration");
        duration = durationDays * 1 days;
    }
    
    function addToVesting(address user, uint amount) external onlyOwner {
        require(vestingInfo[user].amount==0, "Vesting already exists");
        require(duration > 0, "Need to set duration");
        require(token.balanceOf(user) >= amount, "You dont have tokens");
        Vesting memory vesting = Vesting({
            amount:amount,
            vestingDuration: duration, 
            startDate: block.timestamp,
            isReleased: false
        });

        vestingInfo[user] = vesting;
        require(token.transferFrom(user, address(this), amount));
    }

    function release() external {
        Vesting memory vesting = vestingInfo[msg.sender];
        require(vesting.startDate + vesting.vestingDuration <= block.timestamp, "Can't release any money now");
        require(!vesting.isReleased, "You already released tokens");
        require(vesting.amount > 0, "No tokens to release");

        vesting.isReleased=true;
        
        require(token.transfer(msg.sender, vesting.amount), "Transfer failed");
    }

    function calculateDaysUntilRelease() view public returns(uint){
        Vesting memory vesting = vestingInfo[msg.sender];
        uint count = block.timestamp - vesting.startDate;
        
       
        return (duration-count) / 1 days;
    }
}
