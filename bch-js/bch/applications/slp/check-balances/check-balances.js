/*
  Check the BCH and SLP token balances for the wallet created with the
  create-wallet example app.

  TODO:
  - Add diffentiator for TokenType1 vs NFT1.
*/

// REST API servers.
const BCHN_MAINNET = 'https://bchn.fullstack.cash/v5/'

// bch-js-examples require code from the main bch-js repo
const BCHJS = require('@psf/bch-js')

// Instantiate bch-js based on the network.
const bchjs = new BCHJS({ restURL: BCHN_MAINNET })

// Open the wallet generated with create-wallet.
let walletInfo
try {
  walletInfo = require('../create-wallet/wallet.json')
} catch (err) {
  console.log(
    'Could not open wallet.json. Generate a wallet with create-wallet first.'
  )
  process.exit(0)
}

async function getBalance () {
  try {
    const mnemonic = walletInfo.mnemonic

    // root seed buffer
    const rootSeed = await bchjs.Mnemonic.toSeed(mnemonic)

    // master HDNode
    const masterHDNode = bchjs.HDNode.fromSeed(rootSeed)

    // HDNode of BIP44 account
    const account = bchjs.HDNode.derivePath(masterHDNode, "m/44'/245'/0'")

    const change = bchjs.HDNode.derivePath(account, '0/0')

    // get the cash address
    const cashAddress = bchjs.HDNode.toCashAddress(change)
    const slpAddress = bchjs.SLP.Address.toSLPAddress(cashAddress)

    // first get BCH balance
    const balance = await bchjs.Electrumx.balance(cashAddress)

    console.log(`BCH Balance information for ${slpAddress}:`)
    console.log(`${JSON.stringify(balance.balance, null, 2)}`)
    console.log('SLP Token information:')

    // get token balances
    try {
      // const tokens = await bchjs.SLP.Utils.balancesForAddress(slpAddress)
      const tokens = await bchjs.PsfSlpIndexer.balance(cashAddress)

      console.log(JSON.stringify(tokens, null, 2))
    } catch (error) {
      if (error.message === 'Address not found') console.log('No tokens found.')
      else console.log('Error: ', error)
    }
  } catch (err) {
    console.error('Error in getBalance: ', err)
    console.log(`Error message: ${err.message}`)
    throw err
  }
}
getBalance()
