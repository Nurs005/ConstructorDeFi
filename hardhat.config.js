require("@nomicfoundation/hardhat-toolbox");
let SECRET = "bd5a5b26d4de6b4f9e023e5ff9224fb27ecab91bca21bad98caaef744bd0e863";
let BSC = 'S5K6H8DTX92AFYI14YMBDUFXRQTY3QWQNF'
let PSC = '52N4AGC9J4YWPCQRR3XRM6RPVES6JSA5PS'
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    testnet: {
      url: "https://bsc-testnet-rpc.publicnode.com",
      chainId: 97,
      gasPrice: 55000000000,
      accounts: [SECRET],
    },
    mumbai: {
      url: 'https://polygon-mumbai-pokt.nodies.app',
      chainId: 80001,
      gasPrice: 'auto',
      accounts: [SECRET],
    }
  },
  etherscan: {
    apiKey: PSC
  }
};
