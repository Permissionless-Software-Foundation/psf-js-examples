/*
  This example checks the balance of an address.
  It uses x402-bch.fullstack.cash as the back-end API service. This service is 
  requires pay-per-use with BCH, using the x402-bch protocol.
  It has no rate limits and high uptime.

  Instantiate minimal-slp-wallet with a WIF private key or 12-word mnemonic 
  to pay for API calls. Ensure the address has at least 25,000 sats (0.00025 BCH).
  You can generate a keypair at https://paperwallet.fullstack.cash/
*/

// Global npm libraries
import SlpWallet from 'minimal-slp-wallet'

// The address to check the balance of.
const ADDR = 'bitcoincash:qqh793x9au6ehvh7r2zflzguanlme760wuzehgzjh9'


async function start() {
  try {
    // Instantiate minimal-slp-wallet with a WIF private key, 12-word mnemonic, or undefined to generate a new 12-word mnemonic.
    const wallet = new SlpWallet(undefined, {
      interface: 'rest-api',
      restURL: 'https://x402-bch.fullstack.cash/v6',

      // Provide a WIF private key to pay for x402 API calls.
      wif: 'L1eYaneXDDXy8VDig4Arwe8wYHbhtsA5wuQvwsKwhaYeneoZuKG4',

      // Use the slow, free service for broadcasting x402 payments.
      bchServerURL: 'https://bch.fullstack.cash/v6'
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
