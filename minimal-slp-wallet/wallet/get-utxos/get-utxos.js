/*
  This example retrieves the UTXOs for the wallet created in the create-wallet
  example.
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
    await wallet.walletInfoPromise

    const utxos = await wallet.getUtxos(walletData.cashAddress)
    console.log(`UTXOs for ${walletData.cashAddress}: ${JSON.stringify(utxos, null, 2)}`)

  } catch(err) {
    console.error(err)
  }
}
start()
