# Wallet Examples

This directory contains examples demonstrating common wallet operations using [minimal-slp-wallet](https://www.npmjs.com/package/minimal-slp-wallet). These examples cover the fundamental wallet functionality needed to work with Bitcoin Cash (BCH) and SLP tokens.

## Running Examples

You can run each example script by entering its directory and running the JavaScript file with node.js. Example: if the file is named `create-wallet.js`, run it with this command: `node create-wallet.js`

You will need [node.js](https://nodejs.org/en) installed on your computer.

## Recommended Workflow

If you are trying these examples for the first time, here is the recommended path to take when running examples:

1. **[create-wallet](./create-wallet/)** - Create a new BCH wallet. This generates a `wallet.json` file that contains your wallet's mnemonic and address. Send a few cents of BCH to the address in this file to enable the other examples.

2. **[get-balance](./get-balance/)** - Check the balance of your BCH wallet. This displays both BCH information (in sats, BCH, and USD) as well as SLP token information.

3. **[send-bch](./send-bch/)** - Send BCH from the wallet you created. This example sends 1000 sats back to the wallet itself and generates a TXID that you can browse in a block explorer.

4. **[get-utxos](./get-utxos/)** - Retrieve the UTXOs (Unspent Transaction Outputs) for your wallet address. This is useful for understanding the state of your wallet's funds.

5. **[get-tx-data](./get-tx-data/)** - Retrieve verbose details about a transaction, given a transaction ID (TXID). This is useful for examining transaction details.

6. **[get-mutable-token-data](./get-mutable-token-data/)** - Retrieve mutable data for an SLP token, such as token icons and other metadata. This demonstrates how to work with tokens that implement the PS002 and PS007 specifications.

7. **[optimize](./optimize/)** - Optimize your wallet by consolidating UTXOs. This reduces the number of UTXOs in your wallet, making it faster to run code examples. It consolidates all BCH into a single UTXO and consolidates multiple UTXOs representing the same SLP token class.

## Wallet Examples

### Core Wallet Functions

- **[create-wallet](./create-wallet/)** - Create a new BCH wallet and save it to a `wallet.json` file. This file is used by other examples to demonstrate common wallet use-cases.

- **[addr-from-key](./addr-from-key/)** - Import a private key (WIF format) and retrieve the associated BCH address and balance. This demonstrates how to work with an existing wallet using just a private key.

- **[get-balance](./get-balance/)** - Retrieve the BCH and SLP token balance for the wallet. Displays balances in sats, BCH, USD, and lists all token holdings.

- **[get-utxos](./get-utxos/)** - Retrieve the UTXOs for a wallet address. UTXOs represent unspent transaction outputs that can be used in future transactions.

- **[send-bch](./send-bch/)** - Send BCH from your wallet to another address. This example sends 1000 sats from the wallet back to itself, but can be modified to send to any address.

- **[optimize](./optimize/)** - Optimize the wallet by consolidating UTXOs. This reduces the number of UTXOs in the wallet, which can improve performance and reduce transaction fees.

### Transaction and Token Functions

- **[get-tx-data](./get-tx-data/)** - Retrieve detailed information about a transaction using its transaction ID (TXID). Useful for examining transaction details and verification.

- **[get-mutable-token-data](./get-mutable-token-data/)** - Retrieve mutable data for an SLP token, including token icons and other metadata. This demonstrates how to work with tokens that implement PS002 and PS007 specifications for token metadata.

## Additional Resources

For more information about minimal-slp-wallet and available back-end API services, see the [main minimal-slp-wallet README](../README.md) and the [main examples README](../../README.md).

