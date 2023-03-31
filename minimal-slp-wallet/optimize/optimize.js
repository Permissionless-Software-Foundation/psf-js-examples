/*
  This example will execute the optimize() function on the wallet. This will
  reduce the UTXOs in the wallet, making it faster to run code examples. It will
  consolidate all BCH into a single UTXO. If there are multiple UTXOs representing
  the same SLP token class, these UTXOs will be consolidated as well.
*/

// Global npm libraries
const SlpWallet = require('minimal-slp-wallet')

// Open the wallet created with the create-wallet example.
const walletData = require('../create-wallet/wallet.json')

async function start() {
  try {
    // Instantiate a wallet from the saved JSON file.
    const wallet = new SlpWallet(walletData.mnemonic, {
      interface: 'consumer-api',
      restURL: 'https://free-bch.fullstack.cash'
      // Alternative back-end servers: https://gist.github.com/christroutner/63c5513782181f8b8ea3eb89f7cadeb6
    })
    await wallet.initialize()

    const txids = await wallet.optimize()
    console.log(`Wallet optimized! These transaction IDs were generated: ${JSON.stringify(txids, null, 2)}`)

  } catch(err) {
    console.error(err)
  }
}
start()
