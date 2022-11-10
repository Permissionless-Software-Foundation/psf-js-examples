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

## Running Examples
You can run each example script by entering its directory and running the JavaScript file with node.js. Example: if the file is named `create-wallet.js`, run it with this command: `node create-wallet.js`

If you need to install node.js on your linux system, [here are the commands](https://gist.github.com/christroutner/a39f656850dc022b60f25c9663dd1cdd#install-nodejs).

If you are trying to start from the first time, here is the recommended path to take when running examples:
- [create-wallet](./create-wallet) to create a wallet. Send it a few cents of BCH to enable the other examples.
- [get-balance](./get-balance) to show the balance of the BCH in the wallet you just created and funded.
- [send-bch](./send-bch) makes an on-chain transaction by sending BCH from the wallet you created in the first example, back to itself. It generates a TXID that you can browse in a block explorer.
