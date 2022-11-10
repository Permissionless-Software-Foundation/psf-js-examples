# minimal-ecash-wallet

[minimal-ecash-wallet](https://www.npmjs.com/package/minimal-ecash-wallet) is a minimalist eCash (XEC) wallet 'engine' for use with both front end web apps and back end APIs. It contains all the core functionality needed by a wallet:

- Create a new BCH wallet, import a mnemonic, or import a private key (WIF)
- Encrypt a wallets mnemonic for safe storage
- Send and receive eCash
- Send and receive eTokens
- Get balances and UTXOs
- Retrieve transaction history & transaction details
- Burn tokens
- Price XEC in USD
- Send messages on the blockchain via OP_RETURN data
- Verify that a UTXO is unspent
- Get token icons and other media associated with a token

It is 'token aware' and can work with all eTokens, including NFTs. It can interface with Web 2 infrastructure like [FullStack.cash](https://fullstack.cash) or with the [Web 3 Cash Stack](https://cashstack.info) infrastructure.