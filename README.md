# How to retrieve token balances on Ethereum in bulk
This repo contains code example on how you can retreive ethereum tokens in bulk using:
- GraphQL
- Etherplex
- web3 batch (v2.0.0)

### Set up your environment
In the constant.js file, replace the following values to suit your use case. 
- ABI - contract abi with only the balanceOf function, remember to add the function calls you’re planning to execute to the ABI constant. 
- username – geth node basic auth username. 
- password – geth node basic auth password. 
- rpcEndpoint – geth node rpc endpoint. 
- bathEndpoint – basic auth endpoint.
- walletAddress - the account address you want to query.

## GraphQL
Introduced in Ethereum’s GraphQL EIP 1767, adding native GraphQL support to query date from your geth node.
```bash
node graph
```
will yield:
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
Javascript [library](https://github.com/pooltogether/etherplex) that make use of the [multicall](https://etherscan.io/address/0xeefba1e63905ef1d7acba5a8513c70307c1ce441#contracts) smart contract to aggregate function calls and execute them in batches.

```bash
node etherplex
```
Will yield:
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

## Web3 (v2.0.0) batch request
Aggregates the list of contract function calls and convert them into an array of JSON RPC calls before sending it to the geth node in one xmlHttpRequest.

```bash
node batch
```
Will yield:
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