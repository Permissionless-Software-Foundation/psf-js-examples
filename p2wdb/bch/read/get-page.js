/*
    This example shows how to retrieve a page of the latest entries from the P2WDB.
*/

const { Read } = require('p2wdb')

async function start () {
  try {
    const read = new Read()

    // Change this number to retrieve a specific page of results. A page is 20 entries.
    const page = 1
    
    const result = await read.getPage(page)

    console.log(
      `P2WDB page ${page}: ${JSON.stringify(result, null, 2)}`
    )
  } catch (err) {
    console.error(err)
  }
}
start()