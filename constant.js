// Get the following from your Chainstack console
// Check https://docs.chainstack.com/platform/view-node-access-and-credentials#public-chain-nodes

const username = 'username' // replace with your Ethereum node RPC username
const password = 'password' // replace with your Ethereum node RPC password
const rpcEndpoint = 'https://your-chainstack-password-protected-endpoint.com' // replace with your Ethereum node RPC endpoint
const bathEndpoint = `https://${username}:${password}@your-chainstack-password-protected-endpoint.com` // replace with your Ethereum node RPC endpoint
// replace with the address you want to query
const walletAddress = '0x1234512345123451234512345'

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
}
