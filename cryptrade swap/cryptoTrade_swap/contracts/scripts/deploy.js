
const main = async () =>  {
  const Uniswap = await hre.ethers.getContractFactory("Uniswap");
  const uniswap = await Uniswap.deploy();

  await uniswap.deployed();

  console.log("Transactions deployed to: ", uniswap.address);


}

const runMain = async () =>{
  try{
    await main();
    process.exit(0);
  }catch(error){
    console.error(error);
    process.exit(1);
  }
}

runMain();