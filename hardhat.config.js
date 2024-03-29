require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('hardhat-deploy');
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
	const accounts = await hre.ethers.getSigners();

	for (const account of accounts) {
		console.log(account.address);
	}
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	networks: {
		localhost: {
			url: "http://127.0.0.1:8545"
		},
		ganache :{
			url: "http://192.168.115.160:7545",
			accounts: [process.env.PRIVATEKEY]
		},
		icicblocaltest :{
			url: "http://192.168.115.160:5050",
			accounts: [process.env.PRIVATEKEY]
		},
		
		icicb :{
			url: "http://3.143.142.135",
			accounts: [process.env.PRIVATEKEY]
		},
		icicbtestnet :{
			url: "http://13.58.153.103",
			accounts: [process.env.PRIVATEKEY]
		},

		bsctestnet :{
			url: "https://ethereum-rpc.icicbchain.org/bsctest/",
			accounts: [process.env.PRIVATEKEY]
		},

		fantomtestnet: {
			url: "https://rpc.testnet.fantom.network",
			accounts: [process.env.PRIVATEKEY]
		},
		eth :{
			url: "https://ethereum-rpc.icicbchain.org",
			accounts: [process.env.PRIVATEKEY]
		},
		
		ethtest :{
			url: "https://rinkeby.infura.io/v3/580d6de4d2694cbdbee111d2f553dbcc",
			accounts: [process.env.PRIVATEKEY]
		},

		bsc :{
			url: "https://bsc-dataseed1.ninicoin.io/",
			accounts: [process.env.PRIVATEKEY]
		},
		matic :{
			url: "https://rpc-mainnet.matic.quiknode.pro",
			accounts: [process.env.PRIVATEKEY]
		},
		fantom :{
			url: "https://rpc.ftm.tools/",
			accounts: [process.env.PRIVATEKEY]
		}
	},
	etherscan: {
		// Your API key for Etherscan
		// Obtain one at https://etherscan.io/
		apiKey: "WQKQ9RXXCTK715PKG1H7JUMV4ZEUW3KKXN"
	},
	solidity: {
		compilers: [
			{
				version: "0.6.12",
				settings: {
					optimizer: {
						enabled: true,
						runs: 200,
					},
				}
			},
			{
				version: "0.4.17",
				settings: {
					optimizer: {
						enabled: true,
						runs: 200,
					},
				}
			},
			{
				version: "0.5.16",
				settings: {
					optimizer: {
						enabled: true,
						runs: 200,
					},
				}
			},
			{
				version: "0.8.4",
				settings: {
					optimizer: {
						enabled: true,
						runs: 200,
					},
				}
			},
			{
				version: "0.7.6",
				settings: {
					optimizer: {
						enabled: true,
						runs: 200,
					},
				}
			},
		]
	},
	mocha: {
		timeout: 20000
	}
};
