// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Diflation is ERC20, Ownable {
    constructor(
        uint amount,
        string memory name,
        string memory symbol_,
        address initialOwner
    ) ERC20(name, symbol_) Ownable(initialOwner) {
        _mint(msg.sender, amount * 10 ** decimals());
    }
}
