require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name reflect rural social give knee tackle gas'; 
let testAccounts = [
"0x77cd8ffdf602560086185f1e8f142528d23bb98a43298b73be6c10fc210a45c3",
"0xeaabb41e63af7f21a760e0b7216c20914033b66ccbec453776bcd9387477a358",
"0xc5e2c6102b2f867a85e0ec76eae83c9f0d6f2c5e2c3421a27961cb5fb81cdc8a",
"0x6dc444a78d815b841c74b1ce3c4f75346d605455fe62c0f44ada1943c76ecb3d",
"0xa4fd4192a66996f28fbf5a6b66dffee5e1bef25d737622e2937bd37522d0ef5a",
"0x29ca9f9bede9229ed20e086d4269b0c582b45e1535d41af7082a81cd730939d4",
"0xe7fd7ae6c2edf7782015c0d718c507e9d745740b2d61c6d262266a4b1ca30893",
"0xa77b9ceebea5d277874d59f94623ed71da5af9bffb270f84f4c0c2d463c8f350",
"0x6617be02dd85321b3cfe9fd79bb4d2324aa23c05ffbf0350ee3311f70a428deb",
"0x476011448e96594cb476f1f5915930c499b68194cd5f8b41446b015d6f35d59c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


