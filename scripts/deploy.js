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

  // We get the CCTToken contract to deploy
  const CCTToken = await hre.ethers.getContractFactory("CCTToken");
  const ccttoken = await CCTToken.deploy();

  await ccttoken.deployed();

  console.log("CCTToken deployed to:", ccttoken.address);

  // We get the CTXToken contract to deploy
  const CTXToken = await hre.ethers.getContractFactory("CTXToken");
  const ctxtoken = await CTXToken.deploy();

  await ctxtoken.deployed();

  console.log("CTXToken deployed to:", ctxtoken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// CCTToken deployed to: 0xC2D2182EEa80b7a124Edc9D21b95B0c6d7A4016C
// CTXToken deployed to: 0x9FBC94A3c1F9F6c8A4a03c7a8AeE5502491c03Fd