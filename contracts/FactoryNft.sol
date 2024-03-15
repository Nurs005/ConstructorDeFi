// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./nft721.sol";
import "./nft1155.sol";
import "./nft1155preMint.sol";
import "./nft721Premint.sol";

contract NFTContract {
    MyMult _erc1155;
    MyNFT _erc721;
    PremintMult _erc1155Inctanse;
    Premint721 _erc721Inctanse;

    event Deployed_ERC1155(address);
    event Deployed_ERC721(address);
    event Deployed_Premint1155(address);
    event Deployed_Pemint721(address);

    function deployNFT1155(string memory uri, address initialOwner) external {
        _erc1155 = new MyMult(uri, initialOwner);
        emit Deployed_ERC1155(address(_erc1155));
    }

    function deployNFT721(
        string memory name,
        string memory symbol_,
        address initialOwner
    ) external {
        _erc721 = new MyNFT(name, symbol_, initialOwner);
        emit Deployed_ERC721(address(_erc721));
    }

    function deployPremintERC1155(
        string memory uri,
        address account,
        uint id,
        uint amount,
        bytes memory data,
        address initialOwner
    ) external {
        _erc1155Inctanse = new PremintMult(
            uri,
            account,
            id,
            amount,
            data,
            initialOwner
        );
        emit Deployed_Premint1155(address(_erc1155Inctanse));
    }

    function deployPremintERC721(
        address initialOwner,
        string memory _name,
        string memory _symbol,
        address to,
        string memory _tokenURI
    ) external {
        _erc721Inctanse = new Premint721(
            initialOwner,
            _name,
            _symbol,
            to,
            _tokenURI
        );
        emit Deployed_Pemint721(address(_erc721Inctanse));
    }
}
