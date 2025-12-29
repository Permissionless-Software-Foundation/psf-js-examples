/*
  Check the balance of the root address of an HD node wallet generated
  with the create-wallet example.
*/

// REST API servers.
const BCHN_MAINNET = 'https://bchn.fullstack.cash/v5/'

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
  const walletPath = join(__dirname, '../../applications/wallet/create-wallet/wallet.json')
  const walletData = fs.readFileSync(walletPath, 'utf8')
  walletInfo = JSON.parse(walletData)
} catch (err) {
  console.log(
    'Could not open wallet.json. Generate a wallet with create-wallet first.'
  )
  process.exit(0)
}

const ADDR = walletInfo.cashAddress

async function addressDetails () {
  try {
    // first get BCH balance
    const balance = await bchjs.Electrumx.balance(ADDR)

    console.log('BCH Balance information:')
    console.log(`${JSON.stringify(balance, null, 2)}`)
  } catch (err) {
    console.error('Error in getBalance: ', err)
    // throw err
  }
}
addressDetails()
