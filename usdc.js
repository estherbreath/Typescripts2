import { Contract, ethers, formatEther } from "ethers";
import abi from "./abi.json" assert { type: "json" }

const contractAddress= "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const provider = ethers.getDefaultProvider("mainnet");
const contract = new Contract(contractAddress, abi, provider);

async function readContract() {
   const tokenName = await contract.name();
//    const tokenNonce = await contract.nonces();
   const tokenSymbol = await contract.symbol();
   const tokenDecimal = await contract.decimals();
   const tokenTotalSupply = await contract.totalSupply();
//    const accountBalance = await contract.balanceOf("0x25B313158Ce11080524DcA0fD01141EeD5f94b81");
//    formatEther(wei, ethers.BigNumberish);
  

   console.log("token name is "+ tokenName);
   console.log("token symbol is "+ tokenSymbol);
   console.log("token decimal is "+ tokenDecimal);
   console.log("token total supply is "+ tokenTotalSupply);
//    console.log("my account balance is "+ accountBalance);

}

readContract()
