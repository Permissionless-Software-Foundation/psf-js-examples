# p2wdb
[p2wdb](https://www.npmjs.com/package/p2wdb) is JavaScript npm library for reading from and writing to the [PSF](https://psfoundation.cash) pay-to-write database (P2WDB). To learn more about the P2WDB, check out the documentation at [P2WDB.com](https://p2wdb.com).

The examples in this directory show how to read from and write to the P2WDB instances on the BCH and XEC blockchains.

## Read from P2WDB
- `get-page.js` will get a page of 20 results from the P2WDB, most recent listed first.
- `get-by-app-id.js` will get a page of results, filtered by an application ID (`appId`).
- `get-by-hash.js` gets a specific entry by referencing its zCid, which is an OrbitDB CID that starts with the letter 'z'.
- `get-by-txid.js` gets a specific entry by referencing the TXID that paid for the write.

## Write from P2WDB
- `write-to-p2wdb.js` shows how to write an entry to the P2WDB.