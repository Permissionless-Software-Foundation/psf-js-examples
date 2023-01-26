/*
  This example creates a wallet.json file. This file is used by the other
  examples to demonstrate other common wallet use-cases.
*/

// Global npm libraries
const SlpWallet = require('minimal-slp-wallet')
const fs = require('fs')

async function start() {
  try {
    // Generate a wallet
    const wallet = new SlpWallet()

    // If all you need is to create a new wallet, then await on walletInfoPromise.
    // If you are initializing an existing wallet, await wallet.initialize() to
    // retrieve and hydrate the wallets UTXOs.
    await wallet.walletInfoPromise

    // Save the wallet data to a JSON file.
    fs.writeFile('wallet.json', JSON.stringify(wallet.walletInfo, null, 2), function (err) {
      if (err) return console.error(err)
      console.log('wallet.json written successfully.')
    })
  } catch(err) {
    console.error(err)
  }
}
start()
