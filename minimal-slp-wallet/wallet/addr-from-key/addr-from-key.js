/*
  This example task a private key as input. It will report the BCH address
  associated with that private key and the BCH balance currently held by that
  address
*/

// CUSTOMIZE THESE GLOBAL VARIABLES FOR YOUR USE
const WIF = 'L1eYaneXDDXy8VDig4Arwe8wYHbhtsA5wuQvwsKwhaYeneoZuKG4'

// Global npm libraries
import SlpWallet from 'minimal-slp-wallet'

async function start() {
  try {
    // Instantiate a wallet
    const wallet = new SlpWallet(WIF, {
      interface: 'consumer-api',
      restURL: 'https://free-bch.fullstack.cash'
      // Alternative back-end servers: https://gist.github.com/christroutner/63c5513782181f8b8ea3eb89f7cadeb6
    })
    await wallet.initialize()

    console.log('walletInfo: ', wallet.walletInfo)

    const balance = await wallet.getBalance()
    console.log('balance: ', balance)

    const utxos = await wallet.getUtxos()
    console.log('# of UTXOs: ', utxos.bchUtxos.length)

  } catch(err) {
    console.error(err)
  }
}
start()
