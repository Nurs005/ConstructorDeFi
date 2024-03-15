// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFT721 is ERC721, Ownable {
    constructor(
        string memory name,
        string memory symbol,
        address initialOwner
    ) ERC721(name, symbol) Ownable(initialOwner) {}

    function mint(address to, uint tokenId) public {
        _safeMint(to, tokenId);
    }

    function burned(uint tokenid) external onlyOwner {
        _burn(tokenid);
    }
}
