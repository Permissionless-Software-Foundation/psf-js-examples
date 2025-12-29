/*
  This example retrieves the mutable data for an SLP token.

  Here is an example of a token that has mutable data:
  https://slp-token.fullstack.cash/?tokenid=4540a1abe8fc1cdcd92c199c454e6f67391e312de11d7b17f4f0ef3dcaf11e25

  Mutable data is defined by PS002 and PS007 specifications:
  https://github.com/Permissionless-Software-Foundation/specifications/blob/master/ps002-slp-mutable-data.md
  https://github.com/Permissionless-Software-Foundation/specifications/blob/master/ps007-token-data-schema.md

  NFTs using these specifications can created here:
  https://nft-creator.fullstack.cash/


  Mutable data contains the tokens icon. This example shows how to retrieve the
  token's icon URL from the mutable data.
*/

// Global npm libraries
const SlpWallet = require('minimal-slp-wallet')

// Edit this token ID for the token you who icon you want to retrieve.
const TOKEN_ID = '4540a1abe8fc1cdcd92c199c454e6f67391e312de11d7b17f4f0ef3dcaf11e25'

async function start() {
  try {
    // Instantiate a temporary wallet.
    const wallet = new SlpWallet(undefined, {
      interface: 'consumer-api',
      restURL: 'https://free-bch.fullstack.cash'
      // Alternative back-end servers:
      // https://gist.github.com/christroutner/63c5513782181f8b8ea3eb89f7cadeb6
    })
    await wallet.initialize()

    // Get the mutable data for the token
    const tokenData = await wallet.getTokenData2(TOKEN_ID)
    console.log(`tokenData: ${JSON.stringify(tokenData, null, 2)}\n`)

    const tokenIcon = tokenData.mutableData.tokenIcon
    console.log('original token icon: ', tokenIcon, '\n')

    const optimizedTokenIcon = tokenData.optimizedTokenIcon
    console.log('optimized token icon: ', optimizedTokenIcon)
  } catch(err) {
    console.error(err)
  }
}
start()
