const CorgiToken = artifacts.require("CorgiToken");

module.exports = function(deployer) {
  deployer.deploy(CorgiToken);
};
