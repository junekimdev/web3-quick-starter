# Web3 Quick-starter

## Tech Stack

1. HEWT stack
   - Hardhat (Solidity Framework)
   - Ethers.js (Ethereum Wallet Library)
   - Waffle (Test Framework)
   - Typechain (Typescript for Web3)
1. Hardhat plugins
   - hardhat-ethers
   - hardhat-waffle
   - hardhat-deploy
1. Additional dependencies
   - mocha
   - chai
   - dotenv
   - nft.storage
   - prettier

## Installation

1. Clone the repo
1. Create a file named `.env` in the root directory
1. Add keys and values

   1. MASTER_ADDR=xxx
   1. ALCHEMY_API_KEY=xxx
   1. ALCHEMY_PRV_KEY=xxx
   1. ETHERSCAN_API_KEY=xxx
   1. NFT_STORAGE_API_KEY=xxx

## Smart Contract Deployment

1. Write deploy script in `/deploy` folder to use `hardhat-deploy`

1. Compile the contract

   ```shell
   yarn compile
   ```

   - `typechain` will generate type files in `/typechain-types` folder

1. Test the contract

   ```shell
   yarn test
   ```

1. Deploy to local chain

   ```shell
   yarn deploy-local
   ```

1. Deploy to Rinkeby Ethereum testnet

   ```shell
   yarn deploy-remote
   yarn verify
   ```

1. `hardhat-deploy` will output ABIs under `/deployment` folder
