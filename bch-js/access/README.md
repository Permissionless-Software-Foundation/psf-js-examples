# Access - bch-js

The examples in this directory show ways of configuring bch-js to access the different back end resources it needs to interact with the BCH blockchain. The example in each directory is the same in each case: it check the balance of a BCH address. What is different is the way bch-js is configured.

These are the different resources that bch-js can use:

- [bch.fullstack.cash](https://bch.fullstack.cash/) - An instance of [psf-bch-api](https://github.com/Permissionless-Software-Foundation/psf-bch-api). It's free with high uptime, but slow and heavily rate limited. Appropriate for initial prototyping and education. This is recommended for use when working the other JS examples.


- [x402.fullstack.cash](https://x402-bch.fullstack.cash/) - Fast, with reliable uptime. API calls are paid per-use with BCH, using the [x402-bch protocol](https://github.com/x402-bch/x402-bch).


- [Cash Box](https://woodcashbox.com) or [private infrastructure](https://fullstack.cash/pricing) - If you own a [Cash Box](https://woodcashbox.com), run your own instance of [psf-bch-api](https://github.com/Permissionless-Software-Foundation/psf-bch-api), or pay for FullStack.cash to host private infrastructure for you, you can access that instance of [psf-bch-api](https://github.com/Permissionless-Software-Foundation/psf-bch-api) with a Basic Authentication Bearer Token. This allows the API to be publicly available, but only accessible to software that possess the Bearer Token. By default, there are no rate limits.