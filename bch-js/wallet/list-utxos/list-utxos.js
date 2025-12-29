/*
  List the UTXOs associated with the BCH address in the wallet.
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

// Get the balance of the wallet.
async function listUtxos () {
  try {
    // first get BCH balance
    const balance = await bchjs.Electrumx.utxo(walletInfo.cashAddress)

    console.log(`UTXOs associated with ${walletInfo.cashAddress}:`)
    console.log(JSON.stringify(balance, null, 2))
  } catch (err) {
    console.error('Error in listUtxos: ', err)
    throw err
  }
}
listUtxos()
