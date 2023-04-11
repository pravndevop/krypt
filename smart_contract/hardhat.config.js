//https://eth-goerli.g.alchemy.com/v2/3eGdALPQPlNhZle_NMHnoc_yvcYrd8DV

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity:'0.8.0',
  networks: {
    sepolia: {
      url:'https://sepolia.infura.io/v3/f814ab24aefd404dba9c09482c48932b',
      accounts: ['559eaccf8a54720049339e6c089c12d383c1919c427b5edad8dae92d174c0e82']
    }
  }
}