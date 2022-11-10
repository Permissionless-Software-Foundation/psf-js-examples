/*
    This examples shows how to retrieve a page of entries from the P2WDB. These entries are filtered by an 'app ID'. These app IDs allow different applications to write data to the P2WDB, without impacting one another.
*/

const { Read } = require('p2wdb')

// Change this value to an appId of your choice. Results will be filtered against this appId.
const appId = 'p2wdb-pin-001'

// To get more pages of results, change this value.
const page = 1

async function start () {
  try {
    const read = new Read()

    const result = await read.getByAppId(appId, page)

    console.log(
      `Page ${page} of P2WDB entries, filted by app ID ${appId}: ${JSON.stringify(result, null, 2)}`
    )
  } catch (err) {
    console.error(err)
  }
}
start()