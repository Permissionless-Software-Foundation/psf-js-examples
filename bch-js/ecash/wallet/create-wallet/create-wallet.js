/*
  Create an HDNode wallet using bch-js. The mnemonic from this wallet
  will be used by later examples.
  This is an eCash (XEC) specific example
*/

// REST API servers.
const ABC_MAINNET = 'https://abc.fullstack.cash/v5/'

// bch-js-examples require code from the main bch-js repo
const BCHJS = require('@psf/bch-js')

// Instantiate bch-js.
const bchjs = new BCHJS({ restURL: ABC_MAINNET })

const fs = require('fs')

const lang = 'english' // Set the language of the wallet.

// These objects used for writing wallet information out to a file.
let outStr = ''
const outObj = {}

async function createWallet () {
  try {
    // create 256 bit BIP39 mnemonic
    const mnemonic = bchjs.Mnemonic.generate(
      128,
      bchjs.Mnemonic.wordLists()[lang]
    )
    console.log('BIP44 $XEC Wallet')
    outStr += 'BIP44 $XEC Wallet\n'
    console.log(`128 bit ${lang} BIP39 Mnemonic: `, mnemonic)
    outStr += `\n128 bit ${lang} BIP32 Mnemonic:\n${mnemonic}\n\n`
    outObj.mnemonic = mnemonic

    // root seed buffer
    const rootSeed = await bchjs.Mnemonic.toSeed(mnemonic)

    // master HDNode
    const masterHDNode = bchjs.HDNode.fromSeed(rootSeed)

    // HDNode of BIP44 account
    console.log("BIP44 Account: \"m/44'/145'/0'\"")
    outStr += "BIP44 Account: \"m/44'/145'/0'\"\n"

    // Generate the first 10 seed addresses.
    for (let i = 0; i < 10; i++) {
      const childNode = masterHDNode.derivePath(`m/44'/145'/0'/0/${i}`)

      // Generate a BCH address.
      const bchAddr = bchjs.HDNode.toCashAddress(childNode)

      // Convert the BCH address to eCash.
      const eCashAddress = bchjs.Address.toEcashAddress(bchAddr)

      // outputs the address in ecash format
      console.log(`m/44'/145'/0'/0/${i}: ${eCashAddress}`)

      // Save the first seed address for use in the .json output file.
      if (i === 0) {
        outObj.eCashAddress = eCashAddress
        outObj.cashAddress = bchjs.HDNode.toCashAddress(childNode)
        outObj.legacyAddress = bchjs.HDNode.toLegacyAddress(childNode)
        outObj.WIF = bchjs.HDNode.toWIF(childNode)
      }
    }

    // Write the extended wallet information into a text file.
    fs.writeFile('wallet-info.txt', outStr, function (err) {
      if (err) return console.error(err)

      console.log('wallet-info.txt written successfully.')
    })

    // Write out the basic information into a json file for other example apps to use.
    fs.writeFile('wallet.json', JSON.stringify(outObj, null, 2), function (err) {
      if (err) return console.error(err)
      console.log('wallet.json written successfully.')
    })
  } catch (err) {
    console.error('Error in createWallet(): ', err)
  }
}
createWallet()
