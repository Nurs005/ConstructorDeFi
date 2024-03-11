// SPDX-License-Identifier: SEE LICENSE IN LICENSE
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
    BurnableDiflation _BurnableDiflationInstance;
    BurnableInflation _BurnableInflationInstance;
    Diflation _DiflationInstance;
    Inflation _InflationInstance;
    PauseableDiflation _PauseableDiflationInstance;
    PausableDiflationBurn _PausableDiflationBurnInstance;
    PausableMintBurn _PausableMintBurnInstance;
    PausableInflation _PausableInflationInstance;

    event Deploed_InflationInstance(address);
    event Deploed_DiflationInstance(address);
    event Deploed_BurnableInflationInstance(address);
    event Deployed_BurnableDiflationInstance(address);
    event Deploed__PauseableDiflationInstance(address);
    event Deploed_PausableDiflationBurnInstance(address);
    event Deployed_PausableMintBurnInstance(address);
    event Deployed_PausableInflationInstance(address);

    function deploy_InflationInstance(
        string memory name,
        string memory symbol_
    ) external {
        _InflationInstance = new Inflation(name, symbol_);
        emit Deploed_InflationInstance(address(_InflationInstance));
    }

    function deploy_DiflationInstance(
        uint amount,
        string memory name,
        string memory symbol_
    ) external {
        _DiflationInstance = new Diflation(amount, name, symbol_);
        emit Deploed_DiflationInstance(address(_DiflationInstance));
    }

    function deploy_BurnableInflationInstance(
        string memory name,
        string memory symbol_
    ) external {
        _BurnableInflationInstance = new BurnableInflation(name, symbol_);
        emit Deploed_BurnableInflationInstance(
            address(_BurnableInflationInstance)
        );
    }

    function deploy_BurnableDiflationInstance(
        uint amount,
        string memory name,
        string memory symbol_
    ) external {
        _BurnableDiflationInstance = new BurnableDiflation(
            amount,
            name,
            symbol_
        );
        emit Deploed__PauseableDiflationInstance(
            address(_BurnableDiflationInstance)
        );
    }

    function deploy_PauseableDiflationInstance(
        uint amount,
        string memory name,
        string memory symbol_
    ) external {
        _PauseableDiflationInstance = new PauseableDiflation(
            amount,
            name,
            symbol_
        );
        emit Deploed__PauseableDiflationInstance(
            address(_PauseableDiflationInstance)
        );
    }

    function deploy_PausableDiflationBurnInstance(
        uint amount,
        string memory name,
        string memory symbol_
    ) external {
        _PausableDiflationBurnInstance = new PausableDiflationBurn(
            amount,
            name,
            symbol_
        );
        emit Deploed_PausableDiflationBurnInstance(
            address(_PausableDiflationBurnInstance)
        );
    }

    function deploy_PausableMintBurnInstance(
        string memory name,
        string memory symbol_
    ) external {
        _PausableMintBurnInstance = new PausableMintBurn(name, symbol_);
        emit Deployed_PausableMintBurnInstance(
            address(_PausableMintBurnInstance)
        );
    }

    function deploy_PausableInflationInstance(
        string memory name,
        string memory symbol_
    ) external {
        _PausableInflationInstance = new PausableInflation(name, symbol_);
        emit Deployed_PausableInflationInstance(
            address(_PausableInflationInstance)
        );
    }
}
