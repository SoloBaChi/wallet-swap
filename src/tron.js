
const TronWeb = require("tronweb");

const tronWeb = new TronWeb({
    fullHost:"https://api.trongrid.io",
    privateKey:process.TRON_PRIVATE_KEY
})

const createTronWallet = async () => {
    const acc = await tronWeb.createAccount();
    return {
        address:acc?.address?.base58,
        privateKey:acc?.privateKey
    }
}
module.exports = {createTronWallet}