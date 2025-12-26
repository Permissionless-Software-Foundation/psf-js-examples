/*
  This example checks the balance of an address.
  It uses x402-bch.fullstack.cash as the back-end API service. This service is 
  requires pay-per-use with BCH, using the x402-bch protocol.
  It has no rate limits and high uptime.

  Instantiate bch-js with a WIF private key to pay for API calls.
  Ensure the address has at least 25,000 sats (0.00025 BCH).
  You can generate a keypair at https://paperwallet.fullstack.cash/
*/

// REST API servers.
const API_SERVICE_URL = 'https://x402-bch.fullstack.cash/v6'

// bch-js-examples require code from the main bch-js repo
import BCHJS from '@psf/bch-js'

// Instantiate bch-js, specify the URL for the API service.
// Add a WIF private key to pay for API calls.
const bchjs = new BCHJS({ 
  restURL: API_SERVICE_URL,
  // bitcoincash:qz9s2mccqamzppfq708cyfde5ejgmsr9hy7r3unmkk
  wif: 'L1eYaneXDDXy8VDig4Arwe8wYHbhtsA5wuQvwsKwhaYeneoZuKG4'
})

// The address to check the balance of.
const ADDR = 'bitcoincash:qz9s2mccqamzppfq708cyfde5ejgmsr9hy7r3unmkk'

// Get the balance of the wallet.
async function getBalance () {
  try {
    // Get BCH balance
    const balance = await bchjs.Electrumx.balance(ADDR)

    console.log('BCH Balance information:')
    console.log(JSON.stringify(balance, null, 2))
  } catch (err) {
    console.error('Error in getBalance: ', err)
  }
}
getBalance()
