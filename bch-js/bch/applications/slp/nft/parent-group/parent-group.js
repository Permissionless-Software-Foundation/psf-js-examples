/*
  Get the parent Group token, given an NFT token.
*/

// REST API servers.
const BCHN_MAINNET = 'https://bchn.fullstack.cash/v5/'

// bch-js-examples require code from the main bch-js repo
const BCHJS = require('@psf/bch-js')

// Instantiate bch-js based on the network.
const bchjs = new BCHJS({ restURL: BCHN_MAINNET })

const NFT_ID = '45a30085691d6ea586e3ec2aa9122e9b0e0d6c3c1fd357decccc15d8efde48a9'

async function getParentGroup () {
  try {

    const tokenData = await bchjs.PsfSlpIndexer.getTokenData(NFT_ID)
    console.log('tokenData: ', tokenData)

    console.log(`Group token ID: ${tokenData.genesisData.parentGroupId}`)

  } catch (err) {
    console.error('Error in getParentGroup(): ', err)
  }
}
getParentGroup()
