// // SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./Diflation.sol";

contract FactoryOfDeflation {
    Diflation instance;
    event DeployDiflation(address indexed instance);

    function deploy(
        uint amount,
        string memory name,
        string memory symbol_
    ) external {
        instance = new Diflation(amount, name, symbol_);
        emit DeployDiflation(address(instance));
    }
}
