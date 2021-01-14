# Getting multiple token balances on Ethereum

This repository contains code examples on how you can retreive Ethereum tokens in bulk using:

- GraphQL
- Etherplex
- web3.js BatchRequest

## Set up your environment

Install the following Node.js packages:

- [isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch)
- [ethers](https://www.npmjs.com/package/ethers)
- [web3](https://www.npmjs.com/package/web3)

In the `constant.js` file, replace the following values to suit your use case:

- `ABI (Application Binary Interface)` - contract ABI with only the `balanceOf` function, remember to add the function calls you're planning to execute to the ABI constant. 
- `username` — your Ethereum node RPC username.
- `password` — your Ethereum node RPC password.
- `rpcEndpoint` — your Ethereum node RPC endpoint.
- `bathEndpoint` — your Ethereum node RPC endpoint with authentication credentials.
- `walletAddress` — the account address you want to query.

See also Chainstack Docs: [View node access and credentials](https://docs.chainstack.com/platform/view-node-access-and-credentials).

## GraphQL

GraphQL is a runtime natively supported by [Go Ethereum client](https://geth.ethereum.org). See also [GraphQL on Ethereum](https://chainstack.com/graphql-on-ethereum-availability-on-chainstack-and-a-quick-rundown/).

Run:

```bash
node graph
```

Sample results:

```json
{
  "GameCredits":"1600000000000000000000 GAME",
  "Swarm Fund":"0 SWM",
  "Augur":"250684955559177177971383 REP",
  "Tether":"52057527540802 USDT",
  "DigixDAO":"122062000003 DGD",
  "SingularDTV":"1809462 SNGLS",
  "Veros":"0 VRS",
  "Golem":"83169802320824576633066602 GLM",
  "Circuits of Value":"0 COVAL",
  "chrono tech":"0 TIME",
  "Melon":"0 MLN",
  "WeTrust":"0 TRST",
  "iExec RLC":"1633118384742405 RLC",
  ...
}
```

## Etherplex

[Etherplex](https://github.com/pooltogether/etherplex) is a JavaScript library that makes use of the [multicall](https://github.com/makerdao/multicall) smart contract to aggregate function calls and execute them in batches.

Run:

```bash
node etherplex
```

Sample results:

```json
{
  "GameCredits":"1600000000000000000000 GAME",
  "Swarm Fund":"0 SWM",
  "Augur":"250684955559177177971383 REP",
  "Tether":"52057527540802 USDT",
  "DigixDAO":"122062000003 DGD",
  "SingularDTV":"1809462 SNGLS",
  "Veros":"0 VRS",
  "Golem":"83169802320824576633066602 GLM",
  "Circuits of Value":"0 COVAL",
  "chrono tech":"0 TIME",
  "Melon":"0 MLN",
  "WeTrust":"0 TRST",
  "iExec RLC":"1633118384742405 RLC",
  ...
}
```

## web3.js BatchRequest

[web3.js](https://github.com/ethereum/web3.js/) is a JavaScript library that makes use of the [generic JSON-RPC methods](https://eth.wiki/json-rpc/API).

The web3.js `BatchRequest` method aggregates the list of contract function calls and converts them into an array of JSON-RPC calls before sending it to the Ethereum node in one XMLHttpRequest.

Run:

```bash
node batch
```

Sample results:

```json
{
  "GameCredits":"1600000000000000000000 GAME",
  "Swarm Fund":"0 SWM",
  "Augur":"250684955559177177971383 REP",
  "Tether":"52057527540802 USDT",
  "DigixDAO":"122062000003 DGD",
  "SingularDTV":"1809462 SNGLS",
  "Veros":"0 VRS",
  "Golem":"83169802320824576633066602 GLM",
  "Circuits of Value":"0 COVAL",
  "chrono tech":"0 TIME",
  "Melon":"0 MLN",
  "WeTrust":"0 TRST",
  "iExec RLC":"1633118384742405 RLC",
  ...
}
```
