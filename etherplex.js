const { ethers } = require('ethers');
const { batch, contract } = require('@pooltogether/etherplex');
const { abi, username, password, rpcEndpoint, walletAddress } = require('./constant.js');
const { convertToNumber, getTokens } = require('./utils');

const provider = new ethers.providers.JsonRpcProvider({
  url: rpcEndpoint,
  user: username,
  password: password,
});

const generateContractFunctionList = tokens =>
  tokens.map(({ address: tokenAddress, symbol }) =>
    contract(symbol, abi, tokenAddress).balanceOf(walletAddress),
  );

const main = async () => {
  const { tokens } = await getTokens();
  const start = new Date().getTime();
  const args = generateContractFunctionList(tokens);
  const tokenBalances = await batch.apply(null, [provider, ...args])
    .then(balances => {
      const output = {};

      Object.entries(balances).map(([symbol, { balanceOf }], index) => {
        const balance = convertToNumber(balanceOf[0]._hex, tokens[index].decimals);

        output[tokens[index].name] = `${balance} ${symbol}`;
      });

      return output;
    });

  console.log(tokenBalances);
};

main();
