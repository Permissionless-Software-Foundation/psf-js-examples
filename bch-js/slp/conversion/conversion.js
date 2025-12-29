/*
  Convert between address formats
*/

// REST API servers.
const BCHN_MAINNET = 'https://bch.fullstack.cash/v6/'

// bch-js-examples require code from the main bch-js repo
import BCHJS from '@psf/bch-js'
import fs from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Instantiate bch-js based on the network.
const bchjs = new BCHJS({ restURL: BCHN_MAINNET })

// Open the wallet generated with create-wallet.
let walletInfo
try {
  const walletPath = join(__dirname, '../create-wallet/wallet.json')
  const walletData = fs.readFileSync(walletPath, 'utf8')
  walletInfo = JSON.parse(walletData)
} catch (err) {
  console.log(
    'Could not open wallet.json. Generate a wallet with create-wallet first.'
  )
  process.exit(0)
}

async function conversion () {
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
    const legacyAddress = bchjs.SLP.Address.toLegacyAddress(cashAddress)

    console.log(`SLP Address: ${slpAddress}:`)
    console.log(`Cash Address: ${cashAddress}:`)
    console.log(`Legacy Address: ${legacyAddress}:`)
  } catch (err) {
    console.error('Error in conversion: ', err)
    console.log(`Error message: ${err.message}`)
    throw err
  }
}
conversion()
