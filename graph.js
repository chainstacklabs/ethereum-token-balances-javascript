require('isomorphic-fetch');
const ethers = require('ethers');
const { abi, bathEndpoint, walletAddress } = require('./constant.js');
const { convertToNumber, getTokens } = require('./utils');

const convertIndexToAlphetString = number => number.toString().split('')
  .map(numberChar => String.fromCharCode(65 + parseInt(numberChar))).join('');

const queryTemplate = (index, { address }, callData) => `
  ${convertIndexToAlphetString(index)}: call(data: { to: "${address}", data: "${callData}" }) { data }`;

const retrieveTokenBalanceViaGraphQL = (tokens) => {
  const ethersInterface = new ethers.utils.Interface(abi);
  const callData = ethersInterface.functions.balanceOf.encode([walletAddress]);
  const query = tokens.map((token, index) => {
    return queryTemplate(index, token, callData);
  }).join('\n');

  return fetch(`${bathEndpoint}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: `{ block { ${query} } }` }),
    // query block number
    // body: JSON.stringify({ query: `{ block(number: 7966022) { ${query} } }` }),
  })
    .then(data => data.json());
};


const main = async () => {
  const { tokens } = await getTokens();

  const tokenBalances = await retrieveTokenBalanceViaGraphQL(tokens)
    .then(({ data: { block: balances } })  => {
      const output = {};

      Object.entries(balances).map(([, { data: hex }], index) => {
        const { name, decimals, symbol } = tokens[index];

        output[name] = `${convertToNumber(hex, decimals)} ${symbol}`;
      });

      return output;
    });

  console.log(tokenBalances);
};

main();
