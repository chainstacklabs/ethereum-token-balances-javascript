const Web3 = require('web3')
const fs = require('fs')
const { convertToNumber, getTokens } = require('./utils')
const {
  abi,
  bathEndpoint,
  walletAddress,
  blockNumber,
} = require('./constant2.js')

console.log('bathEndpoint :>> ', bathEndpoint)
// const web3 = new Web3()
// web3.setProvider(bathEndpoint)
// console.log('web3 :>> ', web3)
const web3 = new Web3(new Web3.providers.HttpProvider(bathEndpoint))

const generateContractFunctionList = ({ tokens, blockNumber }) => {
  const batch = new web3.BatchRequest()

  tokens.map(async ({ address: tokenAddress, symbol, decimals }) => {
    // console.log('tokenAddress :>> ', tokenAddress)
    if (tokenAddress != null && tokenAddress != '') {
      const contract = new web3.eth.Contract(abi)
      contract.options.address = tokenAddress
      try {
        batch.add(
          contract.methods
            .balanceOf(walletAddress)
            .call.request({}, blockNumber)
        )
      } catch (error) {
        console.error('Error adding request to batch for token ', tokenAddress)
      }
    }
  })

  return batch
}

const main = async () => {
  //const { tokens } = await getTokens()
  const tokens = JSON.parse(fs.readFileSync('./tokens.json'))

  console.log('tokens retrieved :>> ', tokens.length)

  // const batch = generateContractFunctionList({ tokens })
  // query block number
  const batch = generateContractFunctionList({
    tokens,
    blockNumber: blockNumber,
  })

  console.log('batch :>> ', batch)
  const tokenBalances = {}
  const tokensIgnored = []
  let batchData
  try {
    batchData = await batch.execute()
  } catch (error) {
    console.error('Error retrieving balances for some tokens')
    console.error(error)
    batchData = error
  }

  // console.log('batchData :>> ', batchData)

  try {
    batchData.response.forEach((res, index) => {
      const { name, decimals, symbol } = tokens[index]
      if (res && res._hex) {
        tokenBalances[name] = `${convertToNumber(res._hex, decimals)} ${symbol}`
      } else {
        tokensIgnored.push(name)
      }
    })
  } catch (error) {
    console.error('Error retrieving balances for some tokens')
    batchData = error
  }

  console.log(
    'The following tokens returned an error when checking balance:',
    tokensIgnored
  )
  console.log('----------')
  console.log(
    `Balance checked for ${Object.keys(tokenBalances).length} tokens:`
  )
  console.log(tokenBalances)
}

main()
