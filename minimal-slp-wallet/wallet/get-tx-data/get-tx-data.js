/*
  This example retrieves verbose details about a transaction, given the
  transaction ID (TXID).
*/

// CUSTOMIZE THESE GLOBAL VARIABLES FOR YOUR USE
const TXID = 'b4ad5678644f889d4ae6145e1f56a0a1abde3efbafc800c445656a4508642754'

// Global npm libraries
import SlpWallet from 'minimal-slp-wallet'

// Open the wallet created with the create-wallet example.
// import walletData from '../create-wallet/wallet.json' with { type: 'json' }

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
