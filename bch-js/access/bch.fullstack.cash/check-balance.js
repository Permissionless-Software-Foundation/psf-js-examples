/*
  This example checks the balance of an address.
  It uses bch.fullstack.cash as the back-end API service. This service is free with high uptime, but slow and heavily rate limited.
*/

// REST API servers.
const API_SERVICE_URL = 'https://bch.fullstack.cash/v6'

// bch-js-examples require code from the main bch-js repo
import BCHJS from '@psf/bch-js'

// Instantiate bch-js, specify the URL for the API service.
const bchjs = new BCHJS({ 
  restURL: API_SERVICE_URL 
})

// The address to check the balance of.
const ADDR = 'bitcoincash:qqh793x9au6ehvh7r2zflzguanlme760wuzehgzjh9'

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
