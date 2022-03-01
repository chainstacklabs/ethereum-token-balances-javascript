const Web3 = require('web3')
const { convertToNumber, getTokens } = require('./utils')
const { abi, bathEndpoint, walletAddress } = require('./constant.js')

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
  const { tokens } = await getTokens()
  console.log('tokens retrieved :>> ', tokens.length)

  const batch = generateContractFunctionList({ tokens })
  // query block number
  // const batch = generateContractFunctionList({ tokens, blockNumber: 11633038 })
  const tokenBalances = {}
  const tokensIgnored = []
  let batchData
  try {
    batchData = await batch.execute()
  } catch (error) {
    console.error('Error retrieving balances for some tokens')
    batchData = error
  }

  batchData.response.forEach((res, index) => {
    const { name, decimals, symbol } = tokens[index]
    if (res && res._hex) {
      tokenBalances[name] = `${convertToNumber(res._hex, decimals)} ${symbol}`
    } else {
      tokensIgnored.push(name)
    }
  })

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
