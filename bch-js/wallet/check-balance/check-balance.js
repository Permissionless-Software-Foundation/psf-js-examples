/*
  Check the balance of the root address of an HD node wallet generated
  with the create-wallet example.
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

// Instantiate bch-js.
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

// Get the balance of the wallet.
async function getBalance () {
  try {
    // first get BCH balance
    const balance = await bchjs.Electrumx.balance(walletInfo.cashAddress)

    console.log('BCH Balance information:')
    console.log(JSON.stringify(balance, null, 2))
  } catch (err) {
    console.error('Error in getBalance: ', err)
    throw err
  }
}
getBalance()
