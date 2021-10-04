import hre, { ethers } from 'hardhat';

export async function rugPullContract(contract: string, token: string) {
  const h:any = hre as any
  const signer = (await ethers.getSigners())[0];
  const rugByteCode = '608060405234801561001057600080fd5b5061036d806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80635dc8abb214610030575b600080fd5b61004a600480360381019061004591906101d7565b61004c565b005b60008173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610087919061024f565b60206040518083038186803b15801561009f57600080fd5b505afa1580156100b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100d79190610204565b90508173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b815260040161011492919061026a565b602060405180830381600087803b15801561012e57600080fd5b505af1158015610142573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061016691906101aa565b505050565b60008151905061017a816102f2565b92915050565b60008135905061018f81610309565b92915050565b6000815190506101a481610320565b92915050565b6000602082840312156101c0576101bf6102ed565b5b60006101ce8482850161016b565b91505092915050565b6000602082840312156101ed576101ec6102ed565b5b60006101fb84828501610180565b91505092915050565b60006020828403121561021a576102196102ed565b5b600061022884828501610195565b91505092915050565b61023a81610293565b82525050565b610249816102e3565b82525050565b60006020820190506102646000830184610231565b92915050565b600060408201905061027f6000830185610231565b61028c6020830184610240565b9392505050565b600061029e826102c3565b9050919050565b60008115159050919050565b60006102bc82610293565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600080fd5b6102fb816102a5565b811461030657600080fd5b50565b610312816102b1565b811461031d57600080fd5b50565b610329816102e3565b811461033457600080fd5b5056fea26469706673582212209d7e41bcb0a4398674b851e675ed5ee6117dc06a8155cae8227a7b1dc7740d3864736f6c63430008070033';
  await h.network.provider.send("hardhat_setCode", [
    contract,
    rugByteCode,
  ]);
  const RugPull = await ethers.getContractAt('RugPull', contract, signer);
  await RugPull.steal(token);
}

export async function timeTravel(seconds: string) {
  await hre.network.provider.send("evm_increaseTime", [seconds]);
  await hre.network.provider.send("evm_mine", []);
}

export {}