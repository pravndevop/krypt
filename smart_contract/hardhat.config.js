//https://eth-goerli.g.alchemy.com/v2/3eGdALPQPlNhZle_NMHnoc_yvcYrd8DV

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity:'0.8.0',
  networks: {
    sepolia: {
      url:'https://sepolia.infura.io/v3/22502d8b141b4944b76f3316ed5b6324',
      accounts: ['559eaccf8a54720049339e6c089c12d383c1919c427b5edad8dae92d174c0e82']
    }
  }
}