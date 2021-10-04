const { expect } = require("chai");
import hre, { ethers} from 'hardhat'
import { rugPullContract } from './testHelpers';

console.log('hre1: ', hre)

describe("rugpull the Agave agent for its AGVE", async function() {
 it('should rugpull the agent',async  ()=> {
   
  console.log('hre: ', hre?.network)
  // const signer = (await ethers.getSigners())[0]
  // const agentWhale = '0xA377585abED3E943e58174b55558A2482894ce20'
  // const agave = '0x3a97704a1b25F08aa230ae53B352e2e72ef52843'
  // const Agave = await ethers.getContractAt('IERC20', agave, signer)
  

  // // 1. get the amount of tokens from the agent
  // const loot = await Agave.balanceOf(agentWhale)
  // console.log(loot.toString())
  // // 2. do the rug pull
  // await rugPullContract(agentWhale, agave)
  // // 3. get stolen balance
  // const stolen = Agave.balanceOf(signer.address)
  // console.log(stolen.toString())
  // // 4. test
  // expect(loot).to.equal(stolen)
 })
});


  
// let evmcrispr
// hre as any
// it("connect to old Agave DAO", async function() {
//   const signer = (await ethers.getSigners())[0]
//   signer.getChainId = () => {
//     return new Promise((resolve, ) => {
//       resolve(100)
//     })
//   } 

//   const evmcrispr = await EVMcrispr.create(signer, oldDAO, {ipfsGateway: 'https://ipfs.io/ipfs'})
//   expect(evmcrispr.ANY_ENTITY).to.equal("0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF")

//   // const tx = await evmcrispr.forward(
//   //   [evmcrispr.act('agent', hornetVesting, 'revoke()', [])],
//   //   ['agent', 'hooked-token-manager.open'],
//   //   {context: 'revoke hornet vesting'}
//   // )

//   // swap the bytecode from the stkAGVE contract and steal all the AGVE
//   await hre.network.provider.send("hardhat_setCode", [
//     whaleContract,
//     snatchBytecode,
//   ]);
  

// });
