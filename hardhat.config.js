require("@nomicfoundation/hardhat-toolbox");
require("hardhat-contract-sizer");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  // Включение опции allowUnlimitedContractSize
  networks: {
    hardhat: {
      // Другие параметры...
      allowUnlimitedContractSize: true
    }
  }
};
