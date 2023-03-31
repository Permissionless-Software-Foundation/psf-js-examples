/*
  This example retrieves verbose details about a transaction, given the
  transaction ID (TXID).
*/

// CUSTOMIZE THESE GLOBAL VARIABLES FOR YOUR USE
const TXID = '842568f8afb797ac027fb37e185fb818f4dfdae79546b1d1bb7cb683016b45f3'

// Global npm libraries
const SlpWallet = require('minimal-slp-wallet')

// Open the wallet created with the create-wallet example.
// const walletData = require('../create-wallet/wallet.json')

async function start() {
  try {
    // Instantiate a wallet from the saved JSON file.
    const wallet = new SlpWallet(undefined, {
      interface: 'consumer-api',
      restURL: 'https://free-bch.fullstack.cash'
      // Alternative back-end servers: https://gist.github.com/christroutner/63c5513782181f8b8ea3eb89f7cadeb6
    })
    await wallet.walletInfoPromise

    const txData = await wallet.getTxData([TXID])
    console.log(`transaction details: ${JSON.stringify(txData, null, 2)}`)

  } catch(err) {
    console.error(err)
  }
}
start()
