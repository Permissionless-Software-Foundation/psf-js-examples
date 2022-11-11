/*
  Consolidate all UTXOs of size 546 sats or smaller into
  a single UTXO.
*/

// REST API servers.
const BCHN_MAINNET = 'https://bchn.fullstack.cash/v5/'

// bch-js-examples require code from the main bch-js repo
const BCHJS = require('@psf/bch-js')

// Instantiate bch-js.
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

const SEND_ADDR = walletInfo.cashAddress
const SEND_MNEMONIC = walletInfo.mnemonic

async function consolidateDust () {
  try {
    // instance of transaction builder
    const transactionBuilder = new bchjs.TransactionBuilder()

    const dust = 546
    let sendAmount = 0
    const inputs = []

    const data = await bchjs.Electrumx.utxo(SEND_ADDR)
    const utxos = data.utxos

    // Loop through each UTXO assigned to this address.
    for (let i = 0; i < utxos.length; i++) {
      const thisUtxo = utxos[i]

      // If the UTXO is dust...
      if (thisUtxo.value <= dust) {
        inputs.push(thisUtxo)

        sendAmount += thisUtxo.value

        // ..Add the utxo as an input to the transaction.
        transactionBuilder.addInput(thisUtxo.tx_hash, thisUtxo.tx_pos)
      }
    }

    if (inputs.length === 0) {
      console.log('No dust found in the wallet address.')
      return
    }

    // get byte count to calculate fee. paying 1.2 sat/byte
    const byteCount = bchjs.BitcoinCash.getByteCount(
      { P2PKH: inputs.length },
      { P2PKH: 1 }
    )
    console.log(`byteCount: ${byteCount}`)

    const satoshisPerByte = 1.0
    const txFee = Math.ceil(satoshisPerByte * byteCount)
    console.log(`txFee: ${txFee}`)

    // Exit if the transaction costs too much to send.
    if (sendAmount - txFee < 0) {
      console.log(
        "Transaction fee costs more combined dust. Can't send transaction."
      )
      return
    }

    // add output w/ address and amount to send
    transactionBuilder.addOutput(SEND_ADDR, sendAmount - txFee)

    // Generate a change address from a Mnemonic of a private key.
    const change = await changeAddrFromMnemonic(SEND_MNEMONIC)

    // Generate a keypair from the change address.
    const keyPair = bchjs.HDNode.toKeyPair(change)

    // sign w/ HDNode
    let redeemScript
    inputs.forEach((input, index) => {
      transactionBuilder.sign(
        index,
        keyPair,
        redeemScript,
        transactionBuilder.hashTypes.SIGHASH_ALL,
        input.value
      )
    })

    // build tx
    const tx = transactionBuilder.build()
    // output rawhex
    const hex = tx.toHex()
    // console.log(`TX hex: ${hex}`)
    console.log(' ')

    // Broadcast transation to the network
    const broadcast = await bchjs.RawTransactions.sendRawTransaction([hex])

    // import from util.js file
    const util = require('../util.js')
    console.log(`Transaction ID: ${broadcast}`)
    console.log('Check the status of your transaction on this block explorer:')
    util.transactionStatus(broadcast, 'mainnet')
  } catch (err) {
    console.log('error: ', err)
  }
}
consolidateDust()

// Generate a change address from a Mnemonic of a private key.
async function changeAddrFromMnemonic (mnemonic) {
  // root seed buffer
  const rootSeed = await bchjs.Mnemonic.toSeed(mnemonic)

  // master HDNode
  const masterHDNode = bchjs.HDNode.fromSeed(rootSeed)

  // HDNode of BIP44 account
  const account = bchjs.HDNode.derivePath(masterHDNode, "m/44'/145'/0'")

  // derive the first external change address HDNode which is going to spend utxo
  const change = bchjs.HDNode.derivePath(account, '0/0')

  return change
}
