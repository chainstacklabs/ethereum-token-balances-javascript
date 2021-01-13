# Retrieving token balances on Ethereum in bulk

This repository contains code examples on how you can retreive Ethereum tokens in bulk using:

- GraphQL
- Etherplex
- web3.js batch (v2.0.0)

## Set up your environment

Install the following Node.js packages:

- [isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch)
- [ethers](https://www.npmjs.com/package/ethers)
- [web3](https://www.npmjs.com/package/web3)

In the `constant.js` file, replace the following values to suit your use case:

- `ABI` — contract ABI with only the `balanceOf` function. Remember to add the function calls you’re planning to execute to the ABI constant.
- `username` — your Geth node basic auth username.
- `password` — your Geth node basic auth password.
- `rpcEndpoint` — your Geth node RPC endpoint.
- `bathEndpoint` — basic auth endpoint.
- `walletAddress` — the account address you want to query.

See also Chainstack Docs: [View node access and credentials](https://docs.chainstack.com/platform/view-node-access-and-credentials).

## GraphQL

GraphQL is a runtime natively supported by Geth. See also [GraphQL on Ethereum](https://chainstack.com/graphql-on-ethereum-availability-on-chainstack-and-a-quick-rundown/).

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

[Etherplex](https://github.com/pooltogether/etherplex) is a JavaScript library that makes use of the [multicall](https://etherscan.io/address/0xeefba1e63905ef1d7acba5a8513c70307c1ce441#contracts) smart contract to aggregate function calls and execute them in batches.

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

## web3.js (v2.0.0) batch request

[web3.js](https://github.com/ethereum/web3.js/) is a JavaScript library that makes use of the [generic JSON-RPC methods](https://eth.wiki/json-rpc/API).

The batch request aggregates the list of contract function calls and converts them into an array of JSON RPC calls before sending it to the Geth node in one xmlHttpRequest.

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
