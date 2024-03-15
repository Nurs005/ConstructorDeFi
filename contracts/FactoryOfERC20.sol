// // SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./BurnDiflation.sol";
import "./BurnInflation.sol";
import "./Diflation.sol";
import "./Inflation.sol";
import "./PauseableDifl.sol";
import "./PauseableDiflBurn.sol";
import "./PauseableInflation.sol";
import "./PauseableMintBurn.sol";

contract FactoryOfERC20Tokens {
    BurnableDiflation private _burnableDiflationInstance;
    BurnableInflation private _burnableInflationInstance;
    Diflation private _diflationInstance;
    Inflation private _inflationInstance;
    PauseableDiflation private _pauseableDiflationInstance;
    PausableDiflationBurn private _pausableDiflationBurnInstance;
    PausableMintBurn private _pausableMintBurnInstance;
    PausableInflation private _pausableInflationInstance;

    event InflationInstanceDeployed(address indexed instance);
    event DiflationInstanceDeployed(address indexed instance);
    event BurnableInflationInstanceDeployed(address indexed instance);
    event BurnableDiflationInstanceDeployed(address indexed instance);
    event PauseableDiflationInstanceDeployed(address indexed instance);
    event PausableDiflationBurnInstanceDeployed(address indexed instance);
    event PausableMintBurnInstanceDeployed(address indexed instance);
    event PausableInflationInstanceDeployed(address indexed instance);

    function deployInflationI(
        string memory name,
        string memory symbol_,
        address initialOwner
    ) external {
        _inflationInstance = new Inflation(name, symbol_, initialOwner);
        emit InflationInstanceDeployed(address(_inflationInstance));
    }

    function deployDeflI(
        uint amount,
        string memory name,
        string memory symbol_
    ) external {
        _diflationInstance = new Diflation(amount, name, symbol_);
        emit DiflationInstanceDeployed(address(_diflationInstance));
    }

    function deployBurnblInflI(
        string memory name,
        string memory symbol_,
        address initialOwner
    ) external {
        _burnableInflationInstance = new BurnableInflation(
            name,
            symbol_,
            initialOwner
        );
        emit BurnableInflationInstanceDeployed(
            address(_burnableInflationInstance)
        );
    }

    function deployBurnblDefl(
        uint amount,
        string memory name,
        string memory symbol_,
        address initialOwner
    ) external {
        _burnableDiflationInstance = new BurnableDiflation(
            amount,
            name,
            symbol_,
            initialOwner
        );
        emit BurnableDiflationInstanceDeployed(
            address(_burnableDiflationInstance)
        );
    }

    function deployPauseableDfl(
        string memory name,
        string memory symbol_,
        address initialOwner
    ) external {
        _inflationInstance = new Inflation(name, symbol_, initialOwner);
        emit InflationInstanceDeployed(address(_inflationInstance));
    }

    function deployPauseableInfl(
        string memory name,
        string memory symbol_,
        address initialOwner
    ) external {
        _pausableInflationInstance = new PausableInflation(
            name,
            symbol_,
            initialOwner
        );
        emit InflationInstanceDeployed(address(_pausableInflationInstance));
    }

    function deployPausBurnDfl(
        uint amount,
        string memory name,
        string memory symbol_,
        address initialOwner
    ) external {
        _pausableDiflationBurnInstance = new PausableDiflationBurn(
            amount,
            name,
            symbol_,
            initialOwner
        );
        emit PausableDiflationBurnInstanceDeployed(
            address(_pausableDiflationBurnInstance)
        );
    }

    function deployPausInflBurn(
        string memory name,
        string memory symbol_,
        address initialOwner
    ) external {
        _inflationInstance = new Inflation(name, symbol_, initialOwner);
        emit InflationInstanceDeployed(address(_inflationInstance));
    }
}
