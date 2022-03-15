import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const NAME = 'Greeter';

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deploy } = hre.deployments;
  const { deployer } = await hre.getNamedAccounts();

  const deployResult = await deploy(NAME, {
    from: deployer,
    log: true,
    args: ['Hello, Hardhat!'],
  });
  console.log('Contract deployed at:', deployResult.address);
};
func.tags = [NAME];

export default func;
