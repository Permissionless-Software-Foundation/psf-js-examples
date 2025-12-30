/*
  This examples send 1000 sats from the wallet back to itself. You can modify
  this example to send BCH to a different address.
*/

// Global npm libraries
import SlpWallet from 'minimal-slp-wallet'

// Open the wallet created with the create-wallet example.
import walletData from '../create-wallet/wallet.json' with { type: 'json' }

async function start() {
  try {
    // Instantiate a wallet from the saved JSON file.
    const wallet = new SlpWallet(walletData.mnemonic, {
      interface: 'consumer-api',
      restURL: 'https://free-bch.fullstack.cash'
    })
    await wallet.initialize()

    // Overwrite this address if you want to send the BCH to a different address.
    const address = walletData.cashAddress

    // Amount of money to send, in satoshis.
    const amountSat = 1000

    // Send the BCH to the designated address.
    const receivers = [{address, amountSat}]
    const txid = await wallet.send(receivers)

    console.log(`BCH sent with TXID: ${txid}`)
    console.log(`See on block explorer: https://blockchair.com/bitcoin-cash/transaction/${txid}`)
  } catch(err) {
    console.error(err)
  }
}
start()
