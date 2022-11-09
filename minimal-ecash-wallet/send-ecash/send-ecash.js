/*
  This examples send 1000 sats from the wallet back to itself. You can modify
  this example to send eCash to a different address.
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

    // Overwrite this address if you want to send the eCash to a different address.
    const address = walletData.eCashAddress

    // Amount of money to send, in satoshis.
    const amountSat = 1000

    // Send the BCH to the designated address.
    const receivers = [{address, amountSat}]
    const txid = await wallet.send(receivers)

    console.log(`eCash sent with TXID: ${txid}`)
    console.log(`See on block explorer: https://explorer.be.cash/tx/${txid}`)
  } catch(err) {
    console.error(err)
  }
}
start()
