/*
    This example shows how to retrieve an entry from the P2WDB if the OrbitDB CID (zCid, because it's a CID that starts with the letter z) is known.
*/

const { Read } = require('p2wdb')

const hash = 'zdpuB3EnMBne7fePcj9saqF7rU8Zxv7hhkW4xqNNA5Sm2765o'

async function start () {
  try {
    const read = new Read()

    const result = await read.getByHash(hash)

    console.log(
      `P2WDB entry for hash ${hash}: ${JSON.stringify(result, null, 2)}`
    )
  } catch (err) {
    console.error(err)
  }
}
start()