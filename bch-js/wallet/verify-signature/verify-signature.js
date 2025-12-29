/*
  Verify a cryptographic signature.
  Verifies a signature produced with the sign-message example.
*/

const SIGNATURE =
  'H+Np7l5Ee/wTzpEIUYqcSDDJBu8BkOGnk/jCsZDiHzxAIu7V2rJsoisTftyF3Gx0Sk9In94GdiEX7C5xwb7ThmU='
const MESSAGE = 'test'

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

async function verifySignature () {
  try {
    const addr = walletInfo.cashAddress

    const result = bchjs.BitcoinCash.verifyMessage(addr, SIGNATURE, MESSAGE)

    console.log(`Signature is valid: ${result}`)
  } catch (err) {
    console.log('error: ', err)
  }
}
verifySignature()
