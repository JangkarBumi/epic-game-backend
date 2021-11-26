const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ['Gimli', 'Aragorn', 'Legolas'], // Names
    [
      'https://i.imgur.com/14R4eLN.jpeg', // Images
      'https://i.imgur.com/EPJMogH.jpeg',
      'https://i.imgur.com/PIuVH6O.png',
    ],
    [100, 200, 300], // HP values
    [100, 50, 25], // Attack damage values
    'Sauron', // Boss name
    'https://i.imgur.com/7z6ht4m.jpeg', // Boss image
    10000, // Boss hp
    50, // Boss attack damage
  );
  await gameContract.deployed();
  console.log('Contract deployed to:', gameContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
