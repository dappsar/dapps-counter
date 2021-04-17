// const ConvertLib = artifacts.require("ConvertLib");
const Counter = artifacts.require("Counter");

module.exports = function(deployer) {
  // deployer.deploy(ConvertLib);
  // deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(Counter);
};
