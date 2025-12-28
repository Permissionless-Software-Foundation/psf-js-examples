# minimal-slp-wallet

[minimal-slp-wallet](https://www.npmjs.com/package/minimal-slp-wallet) is a minimalist Bitcoin Cash (BCH) wallet 'engine' for use with both front end web apps and back end APIs. It contains all the core functionality needed by a wallet:

- Create a new BCH wallet, import a mnemonic, or import a private key (WIF)
- Encrypt a wallets mnemonic for safe storage
- Send and receive BCH
- Send and receive SLP tokens
- Get balances and UTXOs
- Retrieve transaction history & transaction details
- Burn tokens
- Price BCH in USD
- Send messages on the blockchain via OP_RETURN data
- Verify that a UTXO is unspent
- Get token icons and other media associated with a token

It is 'token aware' and can work with all SLP tokens, including NFTs. The [access directory](./access/) contains examples for interfacing with the different flavors of blockchain infrstructure.


## Running Examples
You can run each example script by entering its directory and running the JavaScript file with node.js. Example: if the file is named `create-wallet.js`, run it with this command: `node create-wallet.js`

You will need [node.js](https://nodejs.org/en) installed on your computer.

If you are trying to start from the first time, here is the recommended path to take when running examples:
- [create-wallet](./wallet/create-wallet) to create a wallet. Send it a few cents of BCH to enable the other examples.
- [get-balance](./wallet/get-balance) to show the balance of the BCH in the wallet you just created and funded.
- [send-bch](./wallet/send-bch) makes an on-chain transaction by sending BCH from the wallet you created in the first example, back to itself. It generates a TXID that you can browse in a block explorer.