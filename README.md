<img width="1200" alt="Labs" src="https://user-images.githubusercontent.com/99700157/213291931-5a822628-5b8a-4768-980d-65f324985d32.png">

<p>
 <h3 align="center">Chainstack is the leading suite of services connecting developers with Web3 infrastructure</h3>
</p>

<p align="center">
  <a target="_blank" href="https://chainstack.com/build-better-with-ethereum/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/Ethereum.svg" /></a>&nbsp;  
  <a target="_blank" href="https://chainstack.com/build-better-with-bnb-smart-chain/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/BNB.svg" /></a>&nbsp;
  <a target="_blank" href="https://chainstack.com/build-better-with-polygon/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/Polygon.svg" /></a>&nbsp;
  <a target="_blank" href="https://chainstack.com/build-better-with-avalanche/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/Avalanche.svg" /></a>&nbsp;
  <a target="_blank" href="https://chainstack.com/build-better-with-fantom/"><img src="https://github.com/soos3d/blockchain-badges/blob/main/protocols_badges/Fantom.svg" /></a>&nbsp;
</p>

<p align="center">
  • <a target="_blank" href="https://chainstack.com/">Homepage</a> •
  <a target="_blank" href="https://chainstack.com/protocols/">Supported protocols</a> •
  <a target="_blank" href="https://chainstack.com/blog/">Chainstack blog</a> •
  <a target="_blank" href="https://docs.chainstack.com/quickstart/">Chainstack docs</a> •
  <a target="_blank" href="https://docs.chainstack.com/quickstart/">Blockchain API reference</a> •
  <a target="_blank" href="https://console.chainstack.com/user/account/create">Start for free</a> •
</p>

# Retrieve multiple token balances on Ethereum

This repository contains code examples on how you can retreive Ethereum tokens in bulk using:

- GraphQL
- Etherplex
- web3.js BatchRequest

## Quick start

Clone the repository:

```sh
git clone https://github.com/chainstack/ethereum-token-balances.git
```

Install  dependencies:

```sh
npm ci
```

> Use `npm ci` to launch a `clean install` of the dependencies, this will install the same version as in the `package.json` file.

Replace the following values in the `constant.js` file to suit your use case:

- `username` — your Ethereum node RPC username.
- `password` — your Ethereum node RPC password.
- `rpcEndpoint` — your Ethereum node RPC endpoint.
- `bathEndpoint` — your Ethereum node RPC endpoint with authentication credentials.
- `walletAddress` — the account address you want to query.
- `ABI (Application Binary Interface)` - contract ABI with only the `balanceOf` function, remember to add the function calls you're planning to execute to the ABI constant.

Then:

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

## Prerequisites

* Node.js: ^16.17.0— [install Node](https://nodejs.org/en/download/)
* A node RPC endpoint.

Deploy a node with Chainstack:

1. [Sign up with Chainstack](https://console.chainstack.com/user/account/create).  
1. [Deploy a node](https://docs.chainstack.com/platform/join-a-public-network).  
1. [View node access and credentials](https://docs.chainstack.com/platform/view-node-access-and-credentials).


## Install

Clone the repository:

```sh
git clone https://github.com/chainstack/ethereum-token-balances.git
```

Install  dependencies:

```sh
npm ci
```

> Use `npm ci` to launch a `clean install` of the dependencies, this will install the same version as in the `package.json` file.
