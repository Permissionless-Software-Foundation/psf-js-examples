Project Path: minimal-slp-wallet

Source Tree:

```
minimal-slp-wallet
├── optimize
│   └── optimize.js
├── addr-from-key
│   └── addr-from-key.js
├── README.md
├── get-balance
│   └── get-balance.js
├── get-utxos
│   └── get-utxos.js
├── create-wallet
│   └── create-wallet.js
├── send-bch
│   └── send-bch.js
├── get-tx-data
│   └── get-tx-data.js
└── get-mutable-token-data
    └── get-mutable-token-data.js

```

`/home/trout/work/psf/code/psf-js-examples/minimal-slp-wallet/optimize/optimize.js`:

```js
/*
  This example will execute the optimize() function on the wallet. This will
  reduce the UTXOs in the wallet, making it faster to run code examples. It will
  consolidate all BCH into a single UTXO. If there are multiple UTXOs representing
  the same SLP token class, these UTXOs will be consolidated as well.
*/

// Global npm libraries
const SlpWallet = require('minimal-slp-wallet')

// Open the wallet created with the create-wallet example.
const walletData = require('../create-wallet/wallet.json')

async function start() {
  try {
    // Instantiate a wallet from the saved JSON file.
    const wallet = new SlpWallet(walletData.mnemonic, {
      interface: 'consumer-api',
      restURL: 'https://free-bch.fullstack.cash'
      // Alternative back-end servers: https://gist.github.com/christroutner/63c5513782181f8b8ea3eb89f7cadeb6
    })
    await wallet.initialize()

    const txids = await wallet.optimize()
    console.log(`Wallet optimized! These transaction IDs were generated: ${JSON.stringify(txids, null, 2)}`)

  } catch(err) {
    console.error(err)
  }
}
start()

```

`/home/trout/work/psf/code/psf-js-examples/minimal-slp-wallet/addr-from-key/addr-from-key.js`:

```js
/*
  This example task a private key as input. It will report the BCH address
  associated with that private key and the BCH balance currently held by that
  address
*/

// CUSTOMIZE THESE GLOBAL VARIABLES FOR YOUR USE
const WIF = 'Ky72RcsMytFtBzSmyS4XMJdCpXd4pdAWanmWwZJkANWX3oV4AqDY'

// Global npm libraries
const SlpWallet = require('minimal-slp-wallet')

async function start() {
  try {
    // Instantiate a wallet
    const wallet = new SlpWallet(WIF, {
      interface: 'consumer-api',
      restURL: 'https://free-bch.fullstack.cash'
      // Alternative back-end servers: https://gist.github.com/christroutner/63c5513782181f8b8ea3eb89f7cadeb6
    })
    await wallet.initialize()

    console.log('walletInfo: ', wallet.walletInfo)

    const balance = await wallet.getBalance()
    console.log('balance: ', balance)

  } catch(err) {
    console.error(err)
  }
}
start()

```

`/home/trout/work/psf/code/psf-js-examples/minimal-slp-wallet/README.md`:

```md
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

It is 'token aware' and can work with all SLP tokens, including NFTs. It can interface with Web 2 infrastructure like [FullStack.cash](https://fullstack.cash) or with the [Web 3 Cash Stack](https://cashstack.info) infrastructure.

## Running Examples
You can run each example script by entering its directory and running the JavaScript file with node.js. Example: if the file is named `create-wallet.js`, run it with this command: `node create-wallet.js`

If you need to install node.js on your linux system, [here are the commands](https://gist.github.com/christroutner/a39f656850dc022b60f25c9663dd1cdd#install-nodejs).

If you are trying to start from the first time, here is the recommended path to take when running examples:
- [create-wallet](./create-wallet) to create a wallet. Send it a few cents of BCH to enable the other examples.
- [get-balance](./get-balance) to show the balance of the BCH in the wallet you just created and funded.
- [send-bch](./send-bch) makes an on-chain transaction by sending BCH from the wallet you created in the first example, back to itself. It generates a TXID that you can browse in a block explorer.
```

`/home/trout/work/psf/code/psf-js-examples/minimal-slp-wallet/get-balance/get-balance.js`:

```js
/*
  This example retrieves the BCH and SLP token balance for the wallet.
*/

// Global npm libraries
const SlpWallet = require('minimal-slp-wallet')

// Open the wallet created with the create-wallet example.
const walletData = require('../create-wallet/wallet.json')

async function start() {
  try {
    // Instantiate a wallet from the saved JSON file.
    const wallet = new SlpWallet(walletData.mnemonic, {
      interface: 'consumer-api',
      restURL: 'https://free-bch.fullstack.cash'
      // Alternative back-end servers: https://gist.github.com/christroutner/63c5513782181f8b8ea3eb89f7cadeb6
    })
    await wallet.initialize()

    // Get the balance in sats.
    const balance = await wallet.getBalance()
    console.log(`Balance in sats: ${balance}`)

    // Convert the sats to BCH
    const bchBalance = wallet.bchjs.BitcoinCash.toBitcoinCash(balance)
    console.log(`Balance in BCH: ${bchBalance}`)

    // Get the spot price of BCH in USD
    const usdSpotPrice = await wallet.getUsd()

    // Calculate the balance in USD terms.
    let usdBalance = bchBalance * usdSpotPrice
    usdBalance = wallet.bchjs.Util.floor2(usdBalance)
    console.log(`Balance in USD: $${usdBalance}`)

    // Get the balance of tokens.
    const tokens = await wallet.listTokens()
    console.log(`Token balances: `, tokens)

  } catch(err) {
    console.error(err)
  }
}
start()

```

`/home/trout/work/psf/code/psf-js-examples/minimal-slp-wallet/get-utxos/get-utxos.js`:

```js
/*
  This example retrieves the UTXOs for the wallet created in the create-wallet
  example.
*/

// Global npm libraries
const SlpWallet = require('minimal-slp-wallet')

// Open the wallet created with the create-wallet example.
const walletData = require('../create-wallet/wallet.json')


async function start() {
  try {
    // Instantiate a wallet from the saved JSON file.
    const wallet = new SlpWallet(walletData.mnemonic, {
      interface: 'consumer-api',
      restURL: 'https://free-bch.fullstack.cash'
      // Alternative back-end servers: https://gist.github.com/christroutner/63c5513782181f8b8ea3eb89f7cadeb6
    })
    await wallet.walletInfoPromise

    const utxos = await wallet.getUtxos(walletData.cashAddress)
    console.log(`UTXOs for ${walletData.cashAddress}: ${JSON.stringify(utxos, null, 2)}`)

  } catch(err) {
    console.error(err)
  }
}
start()

```

`/home/trout/work/psf/code/psf-js-examples/minimal-slp-wallet/create-wallet/create-wallet.js`:

```js
/*
  This example creates a wallet.json file. This file is used by the other
  examples to demonstrate other common wallet use-cases.
*/

// Global npm libraries
const SlpWallet = require('minimal-slp-wallet')
const fs = require('fs')

async function start() {
  try {
    // Generate a wallet
    const wallet = new SlpWallet()

    // If all you need is to create a new wallet, then await on walletInfoPromise.
    // If you are initializing an existing wallet, await wallet.initialize() to
    // retrieve and hydrate the wallets UTXOs.
    await wallet.walletInfoPromise

    // Save the wallet data to a JSON file.
    fs.writeFile('wallet.json', JSON.stringify(wallet.walletInfo, null, 2), function (err) {
      if (err) return console.error(err)
      console.log('wallet.json written successfully.')
    })
  } catch(err) {
    console.error(err)
  }
}
start()

```

`/home/trout/work/psf/code/psf-js-examples/minimal-slp-wallet/send-bch/send-bch.js`:

```js
/*
  This examples send 1000 sats from the wallet back to itself. You can modify
  this example to send BCH to a different address.
*/

// Global npm libraries
const SlpWallet = require('minimal-slp-wallet')

// Open the wallet created with the create-wallet example.
const walletData = require('../create-wallet/wallet.json')

async function start() {
  try {
    // Instantiate a wallet from the saved JSON file.
    const wallet = new SlpWallet(walletData.mnemonic, {
      interface: 'consumer-api',
      restURL: 'https://free-bch.fullstack.cash'
    })
    await wallet.initialize()

    // Overwrite this address if you want to send the BCH to a different address.
    const address = walletData.cashAddress

    // Amount of money to send, in satoshis.
    const amountSat = 1000

    // Send the BCH to the designated address.
    const receivers = [{address, amountSat}]
    const txid = await wallet.send(receivers)

    console.log(`BCH sent with TXID: ${txid}`)
    console.log(`See on block explorer: https://blockchair.com/bitcoin-cash/transaction/${txid}`)
  } catch(err) {
    console.error(err)
  }
}
start()

```

`/home/trout/work/psf/code/psf-js-examples/minimal-slp-wallet/get-tx-data/get-tx-data.js`:

```js
/*
  This example retrieves verbose details about a transaction, given the
  transaction ID (TXID).
*/

// CUSTOMIZE THESE GLOBAL VARIABLES FOR YOUR USE
const TXID = 'b4ad5678644f889d4ae6145e1f56a0a1abde3efbafc800c445656a4508642754'

// Global npm libraries
const SlpWallet = require('minimal-slp-wallet')

// Open the wallet created with the create-wallet example.
// const walletData = require('../create-wallet/wallet.json')

async function start() {
  try {
    // Instantiate a wallet from the saved JSON file.
    const wallet = new SlpWallet(undefined, {
      interface: 'consumer-api',
      restURL: 'https://free-bch.fullstack.cash'
      // Alternative back-end servers: https://gist.github.com/christroutner/63c5513782181f8b8ea3eb89f7cadeb6
    })
    await wallet.walletInfoPromise

    const txData = await wallet.getTxData([TXID])
    console.log(`transaction details: ${JSON.stringify(txData, null, 2)}`)

  } catch(err) {
    console.error(err)
  }
}
start()

```

`/home/trout/work/psf/code/psf-js-examples/minimal-slp-wallet/get-mutable-token-data/get-mutable-token-data.js`:

```js
/*
  This example retrieves the mutable data for an SLP token.

  Here is an example of a token that has mutable data:
  https://slp-token.fullstack.cash/?tokenid=4540a1abe8fc1cdcd92c199c454e6f67391e312de11d7b17f4f0ef3dcaf11e25

  Mutable data is defined by PS002 and PS007 specifications:
  https://github.com/Permissionless-Software-Foundation/specifications/blob/master/ps002-slp-mutable-data.md
  https://github.com/Permissionless-Software-Foundation/specifications/blob/master/ps007-token-data-schema.md

  NFTs using these specifications can created here:
  https://nft-creator.fullstack.cash/


  Mutable data contains the tokens icon. This example shows how to retrieve the
  token's icon URL from the mutable data.
*/

// Global npm libraries
const SlpWallet = require('minimal-slp-wallet')

// Edit this token ID for the token you who icon you want to retrieve.
const TOKEN_ID = '4540a1abe8fc1cdcd92c199c454e6f67391e312de11d7b17f4f0ef3dcaf11e25'

async function start() {
  try {
    // Instantiate a temporary wallet.
    const wallet = new SlpWallet(undefined, {
      interface: 'consumer-api',
      restURL: 'https://free-bch.fullstack.cash'
      // Alternative back-end servers:
      // https://gist.github.com/christroutner/63c5513782181f8b8ea3eb89f7cadeb6
    })
    await wallet.initialize()

    // Get the mutable data for the token
    const tokenData = await wallet.getTokenData2(TOKEN_ID)
    console.log(`tokenData: ${JSON.stringify(tokenData, null, 2)}\n`)

    const tokenIcon = tokenData.mutableData.tokenIcon
    console.log('original token icon: ', tokenIcon, '\n')

    const optimizedTokenIcon = tokenData.optimizedTokenIcon
    console.log('optimized token icon: ', optimizedTokenIcon)
  } catch(err) {
    console.error(err)
  }
}
start()

```
