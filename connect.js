require("dotenv").config();

const near = require("near-api-js");

const options = {
  networkId:   process.env.NEAR_NETWORK,
  nodeUrl:     process.env.NEAR_NODE_URL,
  walletUrl:   `https://wallet.${process.env.NEAR_NETWORK}.near.org`,
  helperUrl:   `https://helper.${process.env.NEAR_NETWORK}.near.org`,
  explorerUrl: `https://explorer.${process.env.NEAR_NETWORK}.near.org`,
  keyStore:    {} // we will configure this later
}

async function main() {
  const client = await near.connect(options);
  const provider = client.connection.provider;
  console.log("Client config:", client.config);

  const status = await provider.status();
  console.log("Status:", status);
}

main();
