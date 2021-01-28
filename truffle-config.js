const fs = require('fs');
const path = require("path");
const HDWalletProvider = require('@truffle/hdwallet-provider');

const mnemonic = fs.readFileSync(".secret").toString().trim();
 if (!mnemonic || mnemonic.split(' ').length !== 12) {
  console.log('unable to retrieve mnemonic from .secret');
}

module.exports = {
  contracts_build_directory: path.join(__dirname, "app/src/contracts"),

  networks: {
    develop: {
      port: 8545
    },    
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    goerli: {
      provider: () => new HDWalletProvider(mnemonic, 'https://rpc.goerli.mudit.blog/', 0, 10),
      network_id: 5
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {  },
  
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.7",
    }
  }
}