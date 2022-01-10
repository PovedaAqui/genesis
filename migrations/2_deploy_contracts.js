var HelloBlockchain = artifacts.require("HelloBlockchain");
var Arg = "Hello world";
module.exports = deployer => {
    deployer.deploy(HelloBlockchain, Arg);
};

const MyNFT = artifacts.require('MyToken');
module.exports = async function (deployer) {
  await deployer.deploy(MyNFT);
};