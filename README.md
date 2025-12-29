# psf-js-examples

This repository contains JavaScript code examples to introduce common workflows when using the [Cash Stack](https://cashstack.info) software, which is maintained by the [PSF](https://psfoundation.cash). Even if you are not a fan of the JavaScript language, this code can provide excellent reference information for an LLM, so that it can refactor these examples into your preferred programming language.

## How To Use

1. To run these examples, you need to first decide which JavaScript library you want to use:

- [minimal-slp-wallet](https://www.npmjs.com/package/minimal-slp-wallet) - The best library for beginners. The focus is on simplified functions for common wallet-based use-cases. It can use both [ipfs-bch-wallet-consumer](https://github.com/Permissionless-Software-Foundation/ipfs-bch-wallet-consumer) and [psf-bch-api](https://github.com/Permissionless-Software-Foundation/psf-bch-api) back end APIs, in any authorization configuration.


- [bch-js](https://www.npmjs.com/package/@psf/bch-js) - This is a ‘swiss army knife’ library for creating custom BCH transactions. It requires advanced knowledge of Bitcoin to use effectively. This library is for advanced users to create custom transactions, and the library can only use an instance of [psf-bch-api](https://github.com/Permissionless-Software-Foundation/psf-bch-api). It can *not* use ipfs-bch-wallet-consumer as a back end service.


2. Once you know which library you want to use, you have to decide which back-end API service you want to use:

- [bch.fullstack.cash](https://bch.fullstack.cash/) - An instance of [psf-bch-api](https://github.com/Permissionless-Software-Foundation/psf-bch-api). It's free with high uptime, but slow and heavily rate limited. Appropriate for initial prototyping and education. This is recommended for use when working the JS examples.


- [free-bch.fullstack.cash](https://free-bch.fullstack.cash/) - An instance of [ipfs-bch-wallet-consumer](https://github.com/Permissionless-Software-Foundation/ipfs-bch-wallet-consumer). Free, faster, but with no guarantee of uptime, since these APIs are provided by volunteers. [bch-js](https://www.npmjs.com/package/@psf/bch-js) can *not* use this service, but [minimal-slp-wallet](https://www.npmjs.com/package/minimal-slp-wallet) can. Great for prototyping a proof of concept application, while keeping costs low. Multiple instances of this service are available [here](https://consumers.psfoundation.info/consumers.json).


- [x402.fullstack.cash](https://x402-bch.fullstack.cash/) - Fast, with reliable uptime. API calls are paid per-use with BCH, using the [x402-bch protocol](https://github.com/x402-bch/x402-bch). This resource is appropriate for production code or for on-the-fly consumption by AI.


- [Cash Box](https://woodcashbox.com) or [private infrastructure](https://fullstack.cash/pricing) - If you own a [Cash Box](https://woodcashbox.com), run your own instance of [psf-bch-api](https://github.com/Permissionless-Software-Foundation/psf-bch-api), or pay for FullStack.cash to host private infrastructure for you, you can access that instance of [psf-bch-api](https://github.com/Permissionless-Software-Foundation/psf-bch-api) with a Basic Authentication Bearer Token. This allows the API to be publicly available, but only accessible to software that possesses the Bearer Token. By default, there are no rate limits.


## Examples

Examples are separated by library (minimal-slp-wallet or bch-js). Within each library, there are *access* examples. These all contain the same example code: retrieving the balance for an address. They differ in how they access back-end API services. They provide an example of the different ways to instantiate the JS libraries, in order to authenticate with the different services during start-up of your application.

- [minimal-slp-wallet examples](./minimal-slp-wallet/)
- [bch-js](./bch-js/)



## Other Resources

The examples above can help JavaScript developers quickly build custom business applications. Check out these libraries for other uses cases:

- We have a [Telegram channel](https://t.me/bch_js_toolkit) where you can chat with other developers using this software. There is also an AI tech support bot trained on all these code bases. You can ask it questions if you need help understanding any of the [Cash Stack](https://cashstack.info) software.

- For developers who want an easy-to-hack command-line wallet, check out [psf-bch-wallet](https://github.com/Permissionless-Software-Foundation/psf-bch-wallet). Are fully-functional CLI wallet with lots of features. Built with minimal-slp-wallet.

- For developers who need a web-based wallet, check out [bch-wallet-web3-spa](https://github.com/Permissionless-Software-Foundation/bch-wallet-web3-spa). [Live demo](https://wallet.psfoundation.info)
