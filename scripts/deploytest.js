// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const MetaTiger = await hre.ethers.getContractFactory("MetaTIGRTEST");
  const metaTiger = await MetaTiger.deploy();

  await metaTiger.deployed();

  console.log("Meta Tiger deployed to:", metaTiger.address);

  let balance = await MetaTiger.balanceOf("0x8B235BF6721C0886F52A65289e4fa415f1778700");
  console.log("Balance of 1st account is:", hre.ethers.utils.formatEther(balance))

  balance = await MetaTiger.balanceOf("0x8536A8bAB030488ffE87ad5442317dB765934182");
  console.log("Balance of 2nd account is:", hre.ethers.utils.formatEther(balance))
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
