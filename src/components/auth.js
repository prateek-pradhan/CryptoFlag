import { AppConfig, UserSession, showConnect } from "@stacks/connect";
import { Person } from "@stacks/profile";
import {
  makeContractCall,
  broadcastTransaction,
  AnchorMode,
  FungibleConditionCode,
  makeStandardSTXPostCondition,
  bufferCVFromString,
  trueCV,
  falseCV,
  noneCV,
  someCV,
  intCV,
  uintCV,
  standardPrincipalCV,
  contractPrincipalCV,
  responseErrorCV,
  responseOkCV,
  listCV,
  tupleCV,
  bufferCV,
  stringAsciiCV
} from '@stacks/transactions';


import { StacksTestnet, StacksMainnet } from '@stacks/network';

const appConfig = new AppConfig(["store_write", "publish_data"]);

export const userSession = new UserSession({ appConfig });
const transitKey = userSession.generateAndStoreTransitKey();
const redirectUri = 'https://www.myapp.com/auth';
const manifestUri = 'https://www.myapp.com/manifest.json';

// for mainnet, use `StacksMainnet()`
const network = new StacksTestnet();

// Add an optional post condition
// See below for details on constructing post conditions
const postConditionAddress = 'SP2ZD731ANQZT6J4K3F5N8A40ZXWXC1XFXHVVQFKE';
const postConditionCode = FungibleConditionCode.GreaterEqual;
const postConditionAmount = 1000000n;
const postConditions = [
  makeStandardSTXPostCondition(postConditionAddress, postConditionCode, postConditionAmount),
];

const tupCV = tupleCV({
  'tx-id': stringAsciiCV("transaction_id5"),
  'amount': uintCV(1),
  'blockchain-name': stringAsciiCV("ethereum_blockc"),
  'wallet-address': stringAsciiCV("wallet_address_")
});


const submittxOptions = {
  contractAddress: 'ST37K8DB91XS1W188AH8HES8PBA3W19F19SJXR70Y',
  contractName: 'CryptoScamClaimFlag',
  functionName: 'submit-claim',
  functionArgs: [
  stringAsciiCV("transaction_ijs"),
  stringAsciiCV("ethereum_blocjs"),
  uintCV(1),
  stringAsciiCV("wallet_address_")],
  senderKey: "89bba0f7f668e857a5e02efd87476e1d7c3ad80ea10e5c29c761798618528f8901",
  validateWithAbi: true,
  network,
  postConditions,
  anchorMode: AnchorMode.Any,
  fee: 290
};
const txOptions = {
  contractAddress: 'ST37K8DB91XS1W188AH8HES8PBA3W19F19SJXR70Y',
  contractName: 'CryptoScamClaimFlag',
  functionName: 'get-claim',
  functionArgs: [stringAsciiCV('transaction_ijs')],
  senderKey: "89bba0f7f668e857a5e02efd87476e1d7c3ad80ea10e5c29c761798618528f8901",
  validateWithAbi: true,
  network,
  postConditions,
  anchorMode: AnchorMode.Any,
  fee: 290
};

export async function submit_claim(){
  const transaction = await makeContractCall(submittxOptions);
  const broadcastResponse = await broadcastTransaction(transaction, network);
  const txId = broadcastResponse.txid;

  console.log(transaction)
  console.log(broadcastResponse)
  console.log(txId)
}
export function authenticate() {
  showConnect({
    appDetails: {
      name: "Cryptoflag",
      icon: window.location.origin + "/logo.svg",
    },
    redirectTo: "/",
    finished: () => {
      window.location.reload();
    },
    userSession: userSession,
  });
}

export function getUserData() {
  console.log(userSession.loadUserData())
  return userSession.loadUserData();
}
