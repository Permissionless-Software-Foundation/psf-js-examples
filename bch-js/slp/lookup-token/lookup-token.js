/*
  Get the token information based on the id.
*/

// EDIT THIS WITH THE TOKEN ID YOU WANT TO LOOK UP
const TOKENID =
  'fa4bccce732f9420f2542e23848630154480793b3200f819de2d6e7d40debb18'

// REST API servers.
const BCHN_MAINNET = 'https://bch.fullstack.cash/v6/'

// bch-js-examples require code from the main bch-js repo
import BCHJS from '@psf/bch-js'

// Instantiate bch-js based on the network.
const bchjs = new BCHJS({ restURL: BCHN_MAINNET })

async function lookupToken () {
  try {
    const properties = await bchjs.PsfSlpIndexer.getTokenData(TOKENID)
    console.log(properties)
  } catch (err) {
    console.error('Error in getTokenInfo: ', err)
    throw err
  }
}
lookupToken()
