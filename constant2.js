// Get the following from your Chainstack console
// Check https://docs.chainstack.com/platform/view-node-access-and-credentials#public-chain-nodes
require('dotenv').config()

const username = process.env.USERNAME || '' // replace with your Ethereum node RPC username
const password = process.env.PASSWORD || '' // replace with your Ethereum node RPC password
const rpcEndpoint = 'https://' + process.env.PASSWORD_PROTECTED_ENDPOINT // replace with your Ethereum node RPC endpoint
const rpcNoHttpPart = process.env.PASSWORD_PROTECTED_ENDPOINT || ''
const bathEndpoint = `https://${username}:${password}@${rpcNoHttpPart}` // replace with your Ethereum node RPC endpoint
// replace with the address you want to query
const walletAddress = process.env.USER_ADDRESS || ''
const blockNumber = process.env.BLOCK_NUMBER || ''

const abi = [
  {
    constant: true,
    inputs: [
      {
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        name: 'balance',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
]

module.exports = {
  abi,
  bathEndpoint,
  password,
  rpcEndpoint,
  username,
  walletAddress,
  blockNumber,
}
