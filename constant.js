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
];

const username = 'username'; // replace with your geth node username 
const password = 'password'; // replace with your geth node password
const rpcEndpoint = 'https://nd-123-456-789.p2pify.com'; // replace with your geth node endpoint 
const bathEndpoint = `https://${username}:${password}@nd-123-456-789.p2pify.com`; // replace with your geth node endpoint
const walletAddress = '0x3f5ce5fbfe3e9af3971dd833d26ba9b5c936f0be';

module.exports = {
  abi,
  bathEndpoint,
  password,
  rpcEndpoint,
  username,
  walletAddress,
};
