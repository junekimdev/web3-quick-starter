import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import 'hardhat-deploy';
import 'dotenv/config'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { task } from 'hardhat/config';
import { HardhatUserConfig } from 'hardhat/types';

task('accounts', 'Prints the list of accounts', async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// Create ".env" file in root directory
// Add ALCHEMY_API_KEY, MASTER_ADDR, PRIVATE_KEY
const {
  MASTER_ADDR = '',
  ALCHEMY_API_KEY = '',
  ALCHEMY_PRV_KEY = '',
  ETHERSCAN_API_KEY = '',
} = process.env;

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
const config: HardhatUserConfig = {
  defaultNetwork: 'development',
  networks: {
    hardhat: {},
    development: {
      url: 'http://localhost:7545',
      chainId: 1337,
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${ALCHEMY_PRV_KEY}`],
    },
  },
  namedAccounts: {
    deployer: {
      development: 0,
      rinkeby: MASTER_ADDR,
    },
  },
  verify: {
    etherscan: {
      apiKey: ETHERSCAN_API_KEY,
    },
  },
  solidity: '0.8.13',
};

export default config;
