// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract PremintMult is ERC1155 {
    address public owner;

    constructor(
        string memory uri,
        address account,
        uint id,
        uint amount,
        bytes memory data,
        address initialOwner
    ) ERC1155(uri) {
        owner = initialOwner;
        _mint(account, id, amount, data);
    }

    modifier OnlyOwner() {
        require(msg.sender == owner, "You are not an owner");
        _;
    }

    function mint(
        address account,
        uint id,
        uint amount,
        bytes memory data
    ) public OnlyOwner {
        _mint(account, id, amount, data);
    }

    function setURI(string memory newuri) public OnlyOwner {
        _setURI(newuri);
    }

    function mintBatch(
        address to,
        uint[] memory ids,
        uint[] memory amounts,
        bytes memory data
    ) public OnlyOwner {
        _mintBatch(to, ids, amounts, data);
    }
}
