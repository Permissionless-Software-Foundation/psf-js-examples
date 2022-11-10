/*
When an entry is written to the P2WDB, it requires a burn of PSF tokens. This generates an on-chain transaction ID (TXID). This TXID is then presented as proof-of-burn, to pay for the write.
    
This example shows how to retrieve an entry from the P2WDB which was paid for by the TXID proof-of-burn.
*/

const { Read } = require('p2wdb')

// Replace this with your own TXID
const txid = '68457bd1d3a36a5f341d647125e71c047338a42a40ce1ba0600d168c6624db37'

async function start () {
  try {
    const read = new Read()

    const result = await read.getByTxid(txid)

    console.log(
      `P2WDB entry for txid ${txid}: ${JSON.stringify(result, null, 2)}`
    )
  } catch (err) {
    console.error(err)
  }
}
start()