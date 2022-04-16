const USDT = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F'
const aUSDT = '0x60D55F02A771d515e077c9C2403a1ef324885CeC'
const USDC = '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
const aUSDC = '0x1a13F4Ca1d028320A707D99520AbFefca3998b7F'

import { ethers } from 'ethers'

import controllerabi from './assets/controller.json'
import tokenabi from './assets/token.json'
import aaveabi from './assets/aave.json'

const controllerAddress = '0xF80a7ec392563A141BECfa6Ea108c3fE79619271'

const provider = new ethers.providers.JsonRpcProvider(
  'https://rpc-mainnet.maticvigil.com',
)

const controllerContract = new ethers.Contract(
  controllerAddress,
  controllerabi,
  provider,
)
const scfContract = new ethers.Contract(
  '0x7075f7B8D36998c4429Fc43d20ce41f2a3C7EF9a',
  tokenabi,
  provider,
)

const aUsdtContract = new ethers.Contract(aUSDT, aaveabi, provider)
const aUsdcContract = new ethers.Contract(aUSDC, aaveabi, provider)

const usdtContract = new ethers.Contract(USDT, tokenabi, provider)
const usdcContract = new ethers.Contract(USDC, tokenabi, provider)

//check approval

async function checkApproval(userAddress) {
  const controllerUsdtApproved = await usdtContract.allowance(
    userAddress,
    controllerAddress,
  )
  const controllerUsdcApproved = await usdcContract.allowance(
    userAddress,
    controllerAddress,
  )

  const million = ethers.BigNumber.from('1000000')

  return {
    usdtApproval: controllerUsdtApproved.gt(million),
    usdcApproval: controllerUsdcApproved.gt(million),
  }
}

function formatEth(val, digit) {
  return ethers.utils.formatUnits(val, digit)
}

export {
  USDT,
  aUSDT,
  USDC,
  aUSDC,
  formatEth,
  controllerContract,
  scfContract,
  aUsdtContract,
  aUsdcContract,
  controllerAddress,
  checkApproval,
  usdtContract,
  usdcContract,
}
