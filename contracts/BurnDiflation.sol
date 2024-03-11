// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ExampleMint is ERC20, ERC20Burnable, Ownable {
    constructor(
        uint amount,
        string memory name,
        string memory symbol_
    ) ERC20(name, symbol_) Ownable(msg.sender) {
        _mint(msg.sender, amount * 10 ** decimals());
    }

    function burn(address acount, uint256 amount) external onlyOwner {
        burnFrom(acount, amount);
    }

    function burnSelfTokens(uint256 value) external {
        burn(value);
    }
}
