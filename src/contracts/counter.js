import Artifacts from './artifacts.json'
import { getWeb3, getAccount } from '../eth/network.js'

export default function Counter (web3, address, options = {}) {
  const artifact = Artifacts.contracts['contracts/counter.sol:Counter']
  return new web3.eth.Contract(JSON.parse(artifact.abi), address, options)
}

export async function getDeployed () {
  const web3 = getWeb3()
  const from = await getAccount()
  const address = process.env.REACT_APP_COUNTER_ADDRESS
  const contract = Counter(web3, address, { from })
  return contract
}
