/*
  Cryptographically sign a message with the private key.
  This signature can then be verified with the verify-signature example.
*/

const MESSAGE = 'test'

// REST API servers.
const BCHN_MAINNET = 'https://bchn.fullstack.cash/v5/'

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

async function signMessage () {
  try {
    const wif = walletInfo.WIF

    const signedMessage = bchjs.BitcoinCash.signMessageWithPrivKey(wif, MESSAGE)

    console.log(`Address: ${walletInfo.cashAddress}`)
    console.log(`Message: ${MESSAGE}`)
    console.log(`Signed message: ${signedMessage}`)
  } catch (err) {
    console.log('error: ', err)
  }
}
signMessage()
