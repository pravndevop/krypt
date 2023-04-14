//https://eth-goerli.g.alchemy.com/v2/3eGdALPQPlNhZle_NMHnoc_yvcYrd8DV
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: API_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
