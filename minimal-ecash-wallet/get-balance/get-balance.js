/*
  This example retrieves the eCash and eToken balances for the wallet.
*/

// Global npm libraries
const XecWallet = require('minimal-ecash-wallet')

// Open the wallet created with the create-wallet example.
const walletData = require('../create-wallet/wallet.json')

async function start() {
  try {
    // Instantiate a wallet from the saved JSON file.
    const wallet = new XecWallet(walletData.mnemonic, {
      interface: 'consumer-api',
      restURL: 'https://xec-consumer-or1-usa.fullstackcash.nl'
      // Alternative back-end servers: https://gist.github.com/christroutner/621bb9d64e2642b9f0d30e67c33a9d6c
    })
    await wallet.initialize()

    // Get the balance in sats.
    const balance = await wallet.getBalance()
    console.log(`Balance in sats: ${balance}`)

    // Convert the sats to eCash
    const eCashBalance = balance / 100
    console.log(`Balance in eCash: ${eCashBalance}`)

    // Get the spot price of eCash in USD
    const usdSpotPrice = await wallet.getUsd()

    // Calculate the balance in USD terms.
    let usdBalance = eCashBalance * usdSpotPrice
    usdBalance = wallet.bchjs.Util.floor2(usdBalance)
    console.log(`Balance in USD: $${usdBalance}`)

    // Get the balance of tokens.
    const tokens = await wallet.listTokens()
    console.log(`Token balances: `, tokens)

  } catch(err) {
    console.error(err)
  }
}
start()
