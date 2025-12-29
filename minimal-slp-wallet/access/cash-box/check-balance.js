/*
  This example retrieves the BCH and SLP token balance for the wallet.

  It uses private infrastructure secured by a bearer token. Like these:
  - Cash Box (https://woodcashbox.com)
  - Private infrastructure (https://fullstack.cash/pricing)
*/

// Global npm libraries
import SlpWallet from 'minimal-slp-wallet'

// The address to check the balance of.
const ADDR = 'bitcoincash:qqh793x9au6ehvh7r2zflzguanlme760wuzehgzjh9'


async function start() {
  try {
    // Instantiate a wallet from the saved JSON file.
    const wallet = new SlpWallet(undefined, {
      interface: 'rest-api',
      restURL: 'https://dev.fullstack.cash/v6',
      bearerToken: 'test01'
    })
    await wallet.walletInfoPromise

    // Get the balance in sats.
    const balance = await wallet.getBalance({bchAddress: ADDR})
    console.log(`Balance for address ${ADDR} in sats: ${balance}`)

  } catch(err) {
    console.error(err)
  }
}
start()
