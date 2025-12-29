/*
  This example retrieves the BCH and SLP token balance for the wallet.
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

    // Get the balance in sats.
    const balance = await wallet.getBalance()
    console.log(`Balance in sats: ${balance}`)

    // Convert the sats to BCH
    const bchBalance = wallet.bchjs.BitcoinCash.toBitcoinCash(balance)
    console.log(`Balance in BCH: ${bchBalance}`)

    // Get the spot price of BCH in USD
    const usdSpotPrice = await wallet.getUsd()

    // Calculate the balance in USD terms.
    let usdBalance = bchBalance * usdSpotPrice
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
