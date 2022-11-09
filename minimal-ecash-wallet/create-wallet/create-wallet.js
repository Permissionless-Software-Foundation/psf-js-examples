/*
  This example creates a wallet.json file. This file is used by the other
  examples to demonstrate other common wallet use-cases.
*/

// Global npm libraries
const XecWallet = require('minimal-ecash-wallet')
const fs = require('fs')

async function start() {
  try {
    // Generate a wallet
    const wallet = new XecWallet()
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
