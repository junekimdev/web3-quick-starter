import { waffle, ethers } from 'hardhat';
import { expect, assert } from 'chai';
import GreeterABI from '../artifacts/contracts/Greeter.sol/Greeter.json';
import { Greeter } from '../typechain-types';

const { deployContract, provider } = waffle;

describe('Greeter', function () {
  const [owner, ...wallets] = provider.getWallets();
  let contract: Greeter;

  // Given: Greeter contract deployed by the owner
  before(async () => {
    contract = (await deployContract(owner, GreeterABI)) as Greeter;
  });

  // When
  describe('User executes greet()', () => {
    // Then
    it('Should return "Hello, world!"', async () => {
      expect(await contract.greet()).to.equal('Hello, world!');
    });
  });

  // When
  describe('User changes greeting message', () => {
    // Then
    it('Should return the new message', async function () {
      const setGreetingTx = await contract.setGreeting('Hola, mundo!');

      // wait until the transaction is mined
      await setGreetingTx.wait();

      expect(await contract.greet()).to.equal('Hola, mundo!');
    });
  });
});
