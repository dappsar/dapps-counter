/*
var HDWalletProvider = require("truffle-hdwallet-provider");

let MNEMONIC = process.env.MNEMONIC || 'dummy'; // dummy to avoid error en empty envirnment variable
let INFURA_KEY = process.env.INFURA_KEY || 'dummy'; // dummy to avoid error en empty envirnment variable
let PRIVATEKEYBESU = process.env.PRIVATEKEYBESU || "0x8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63";
let BESURPC = process.env.BESURPC || "http://35.185.223.84:32768/jsonrpc";
*/

module.exports = {
  networks: {
    // address 0.0.0.0 para que aplique también a despliegue en cloud = 127.0.0.1
    development: {
      host: '0.0.0.0',
      port: 8545,
      network_id: '*',
      gasPrice: 3000
    },
    /*
      besu: {
      provider: () => new HDWalletProvider(PRIVATEKEYBESU, BESURPC),
      network_id: "*",
      gasPrice: 30000 // al migrar, aunque este en 0, queda en 0.000001 gwei
    },
    ropsten: {
      provider: new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/" + INFURA_KEY),
      network_id: 3
    },
    rinkeby: {
      provider: new HDWalletProvider(MNEMONIC, "https://rinkeby.infura.io/v3/" + INFURA_KEY),
      network_id: 4
    }
    */
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './build/contracts/',
  /*
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
  */
};
