require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.2",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/OtB2HFkhx9HSv5zmxBDzpxrOp2kG4E9R",
      accounts: [
        "c539c68b692e4771b24d7f1880404235e0d54f0e5210dced48945cb3e3f46048",
      ],
    },
  },
};
