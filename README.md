# psf-js-examples

This repository contains code examples for working with [PSF](https://psfoundation.cash) software. The primary software covered in these examples:

- [minimal-slp-wallet](https://www.npmjs.com/package/minimal-slp-wallet) provides high-level abstractions for working with wallets, Bitcoin Cash, and SLP tokens on the BCH blockchain.
- [minimal-ecash-wallet](https://www.npmjs.com/package/minimal-ecash-wallet) is a fork of minimal-slp-wallet. It provides the same function calls for working with wallets, eCash, and eTokens on the XEC blockchain.
- [bch-js](https://www.npmjs.com/package/@psf/bch-js) is a lower-level library for crafting custom transactions, doing in-depth blockchain analysis, and other lower-level tasks. It is embedded inside minimal-slp-wallet and minimal-ecash-wallet.
- [p2wdb](https://www.npmjs.com/package/p2wdb) (and [p2wdb-esm](https://www.npmjs.com/package/p2wdb-esm)) allows for easy reading and writing to the [pay-to-write database (P2WDB)](https://p2wdb.com/).

The examples in these libraries can help JavaScript developers quickly build custom business applications. Check out these libraries for other uses cases:
- For developers who want an easy-to-hack command-line wallet, check out [psf-bch-wallet]() and [psf-ecash-wallet](). They are fully-functional wallets with lots of features, and are built upon minimal-slp-wallet and minimal-ecash-wallet.
- For developers who need a web wallet, or are building an Android or iOS app, check out [bch-wallet-web3-android](https://github.com/Permissionless-Software-Foundation/bch-wallet-web3-android) and [ecash-wallet-web3-android](https://github.com/Permissionless-Software-Foundation/ecash-wallet-web3-android). [Live demo](https://bchn-wallet.fullstack.cash)

Explore the directories of this repository. Each major directory will have its own README containing additional instructions.