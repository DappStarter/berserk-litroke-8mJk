require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'give clog orphan slab chase note random company include kitten sun genius'; 
let testAccounts = [
"0x87dd290657ccec1608c3540eb5f0f7ccd1b0ae4a59154e651c2f8a026937723f",
"0xa101734abacebb21ef18df36a7aab96cece9c1e3165bc8e9052da261ac648efd",
"0xbf89c0bf232832849e386ea9142c6bdc66051f95484afd9221f8d10ab6289fbf",
"0x5d05781038a5d48047804ea55e114366a9d7db9eff177983bb03c0e4693d08d1",
"0x46c70abc93606b91e8f348e137666cf7593b3622c7851658b6ab69c9384193bb",
"0x8038562c071b34ddd99a847aba58297a1015f819464aab1ef7dad65d241072a7",
"0xb30c9d37b240ba12b061c351f490bbcf37b96279a68a82b63853a80768718d57",
"0xf9236277b4d64bd172161a4ca48f0959f12311915f88a804f09936eff0e65e72",
"0x06e792601a2f854661094a40e321ac39defd82f15ea628dabfa0c866d0ef1167",
"0x4c1f77c85e5793776b66f37785825470d599e00f7197f9fc370cdba2017f0ed1"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


