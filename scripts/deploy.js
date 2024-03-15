// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const FactoryOfBurnbleDfl = await hre.ethers.getContractFactory('FactoryOfBurnableDiflation');
  const FactoryOfBurnableInfl = await hre.ethers.getContractFactory('FactoryBurnableInflation');
  const FactoryOfPauseDfl = await hre.ethers.getContractFactory('FactoryOfBurnableDiflationPaus');
  const FactoryOfPauseInfl = await hre.ethers.getContractFactory('FactoryInflationPauseable');
  const FactoryOfPauseBurnDfl = await hre.ethers.getContractFactory('FactoryOfBurnableDiflationPaus');
  const FactoryOfPauseBurnInfl = await hre.ethers.getContractFactory('FactoryInflationPausBurn');
  const Factory = await hre.ethers.getContractFactory('FactoryOfPauseableDifl');

  const factory = await Factory.deploy();
  factory.waitForDeployment();



  console.log(
    `factoryOfBurnableInfl deploed: ${factory.target};
    
     `
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
