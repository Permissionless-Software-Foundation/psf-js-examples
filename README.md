# psf-js-examples

This repository contains JavaScript code examples to introduce common workflows when using the [Cash Stack](https://cashstack.info) software, which is maintained by the [PSF](https://psfoundation.cash). Even if you are not a JavaScript developer, this code can provide excellent reference information for an LLM.

## How To Use

1. To run these examples, you need to first decide which JavaScript library you want to use:

- [minimal-slp-wallet](https://www.npmjs.com/package/minimal-slp-wallet) - The best library for beginners. Has a simplified API for common use cases. Can use both [ipfs-bch-wallet-consumer](https://github.com/Permissionless-Software-Foundation/ipfs-bch-wallet-consumer) and [psf-bch-api](https://github.com/Permissionless-Software-Foundation/psf-bch-api) in any access configuration.


- [bch-js](https://www.npmjs.com/package/@psf/bch-js) - This is a ‘swiss army knife’ library for creating custom BCH transactions. It requires deep knowledge of the inner workings of Bitcoin to use. This library is for advanced users, and the library can only use an instance of [psf-bch-api](https://github.com/Permissionless-Software-Foundation/psf-bch-api). It can *not* use ipfs-bch-wallet-consumer as a back end service.


2. Once you know which library you want to use, you have to decide which back-end API service you want to use:

- [bch.fullstack.cash](https://bch.fullstack.cash/) - An instance of [psf-bch-api](https://github.com/Permissionless-Software-Foundation/psf-bch-api). It's free with high uptime, but slow and heavily rate limited. Appropriate for initial prototyping and education. This is recommended for use when working the JS examples.


- [free-bch.fullstack.cash](https://free-bch.fullstack.cash/) - An instance of [ipfs-bch-wallet-consumer](https://github.com/Permissionless-Software-Foundation/ipfs-bch-wallet-consumer). Free, faster, but with no guarantee of uptime, since these APIs are provided by volunteers. bch-js can not use this service, but minimal-slp-wallet can. Great for prototyping a proof of concept application, while keeping costs low. Multiple instances of this service are available [here](https://consumers.psfoundation.info/consumers.json).


- [x402.fullstack.cash](https://x402-bch.fullstack.cash/) - Fast, with reliable uptime. API calls are paid ala-cart with BCH, using the x402-bch protocol.


- [Cash Box](https://woodcashbox.com) or [private infrastructure](https://fullstack.cash/pricing) - If you own a Cash Box, run your own instance of [psf-bch-api](https://github.com/Permissionless-Software-Foundation/psf-bch-api), or pay for FullStack.cash to host private infrastructure for you, you can access that instance of [psf-bch-api](https://github.com/Permissionless-Software-Foundation/psf-bch-api) with a Basic Authentication Bearer Token. This allows the API to be publicly available, but only accessible to software that possess the Bearer Token.




The software libraries covered in these examples:

- [minimal-slp-wallet](https://www.npmjs.com/package/minimal-slp-wallet) provides high-level abstractions for working with wallets, Bitcoin Cash, and SLP tokens on the BCH blockchain.
- [minimal-ecash-wallet](https://www.npmjs.com/package/minimal-ecash-wallet) is a fork of minimal-slp-wallet. It provides the same function calls for working with wallets, eCash, and eTokens on the XEC blockchain.
- [bch-js](https://www.npmjs.com/package/@psf/bch-js) is a lower-level library for crafting custom transactions, doing in-depth blockchain analysis, and other lower-level tasks. It is embedded inside minimal-slp-wallet and minimal-ecash-wallet.
- [p2wdb](https://www.npmjs.com/package/p2wdb) (and [p2wdb-esm](https://www.npmjs.com/package/p2wdb-esm)) allow for easy reading and writing to the [pay-to-write database (P2WDB)](https://p2wdb.com/).

The examples in these libraries can help JavaScript developers quickly build custom business applications. Check out these libraries for other uses cases:
- For developers who want an easy-to-hack command-line wallet, check out [psf-bch-wallet]() and [psf-ecash-wallet](). They are fully-functional wallets with lots of features, and are built with minimal-slp-wallet and minimal-ecash-wallet.
- For developers who need a web wallet, or are building an Android or iOS app, check out [bch-wallet-web3-android](https://github.com/Permissionless-Software-Foundation/bch-wallet-web3-android) and [ecash-wallet-web3-android](https://github.com/Permissionless-Software-Foundation/ecash-wallet-web3-android). [Live demo](https://bchn-wallet.fullstack.cash)

## How to Use
Explore the directories of this repository. Each major directory will have its own README containing additional instructions.

- [minimal-slp-wallet](./minimal-slp-wallet)
- [minimal-ecash-wallet](./minimal-ecash-wallet)
- [bch-js](./bch-js)
- [p2wdb](./p2wdb)