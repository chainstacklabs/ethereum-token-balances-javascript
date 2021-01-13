const { toBN } = require('web3-utils');
require('isomorphic-fetch');

const tokenSource = 'https://tokens.coingecko.com/uniswap/all.json';
const getTokens = () => {
  return fetch(tokenSource, {
    methods: 'GET',
    headers: { 'Content-Type': 'application/json', },
  }).then(data => data.json());
};

const convertToNumber = (hex, decimals) => {
  const balance = toBN(hex);
  let balanceDecimal = balance;
  if (decimals && (balance.toLocaleString() === '0' && decimals < 20)) {
    balanceDecimal = balance.div(toBN(10 ** decimals));
  }

  return balanceDecimal.toLocaleString();
};

module.exports = {
  convertToNumber,
  getTokens,
};
