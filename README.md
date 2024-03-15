# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
Smart contract Factory ERC20;
 
В этой части контракта мы создаем экземляры контракта

 ``` solidity
 BurnableDiflation _BurnableDiflationInstance;
    BurnableInflation _BurnableInflationInstance;
    Diflation _DiflationInstance;
    Inflation _InflationInstance;
    PauseableDiflation _PauseableDiflationInstance;
    PausableDiflationBurn _PausableDiflationBurnInstance;
    PausableMintBurn _PausableMintBurnInstance;
    PausableInflation _PausableInflationInstance;
```
 В функция `deploy` мы просто передаем параметры которые требует  
