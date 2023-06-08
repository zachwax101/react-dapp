require("@nomiclabs/hardhat-waffle");

module.exports = {
  defaultNetwork: "hardhat",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {},
    georli: {
      url: "https://goerli.blockpi.network/v1/rpc/public",
      accounts: [`0x${process.env.TerraformKey}`]
    }
  },
  solidity: "0.8.9",
};