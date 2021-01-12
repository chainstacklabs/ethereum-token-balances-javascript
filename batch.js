const Web3 = require('web3');
const { convertToNumber, getTokens } = require('./utils'); // look at helper functions above 
const { abi, bathEndpoint, walletAddress } = require('./constant.js');

const web3 = new Web3(new Web3.providers.HttpProvider(bathEndpoint));

const generateContractFunctionList = ({ tokens, blockNumber }) => {
  const batch = new web3.BatchRequest();

  tokens.map(async ({ address: tokenAddress, symbol, decimals }) => {
    const contract = new web3.eth.Contract(abi);
    contract.options.address = tokenAddress;
    batch.add(contract.methods.balanceOf(walletAddress).call.request({}, blockNumber));
  });

  return batch;
};

const main = async () => {
  const { tokens } = await getTokens();

  const batch = generateContractFunctionList({ tokens });
  // query block number
  // const batch = generateContractFunctionList({ tokens, blockNumber: 11633038 });
  const tokenBalances = {};
  const { response } = await batch.execute();
  response.forEach(({ _hex }, index) => {
    const { name, decimals, symbol } = tokens[index];

    tokenBalances[name] = `${convertToNumber(_hex, decimals)} ${symbol}`;
  });

  // console.log(tokenBalances);
};

main();
