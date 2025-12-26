/*
  This example checks the balance of an address.

  It uses private infrastructure secured by a bearer token. Like these:
  - Cash Box (https://woodcashbox.com)
  - Private infrastructure (https://fullstack.cash/pricing)
*/

// REST API servers.
const API_SERVICE_URL = 'https://dev.fullstack.cash/v6'

// bch-js-examples require code from the main bch-js repo
import BCHJS from '@psf/bch-js'

// Instantiate bch-js, specify the URL for the API service.
// Add a WIF private key to pay for API calls.
const bchjs = new BCHJS({ 
  restURL: API_SERVICE_URL,
  bearerToken: 'test02'
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
