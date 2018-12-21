'use strict'
const HDWalletProvider = require('truffle-hdwallet-provider')

const INFURA_TOKEN = '<TOKEN>'
const mnemonic = 'orange apple banana...'

module.exports = {
  networks: {
    local: {
      host: 'localhost',
      port: 9545,
      gas: 5000000,
      gasPrice: 5e9,
      network_id: '*'
    },
    mainnet: {
      provider: function() {
        return new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/${INFURA_TOKEN}`)
      },
      network_id: 1
    }
  }
}
