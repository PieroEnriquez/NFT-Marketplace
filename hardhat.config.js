require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const dotenv = require("dotenv")
dotenv.config()

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/2gEg3aLXAGNUdGz8CqtGlRZJU1tDBRbc",
      accounts: [ process.env.ALCHEMY_KEY ]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};