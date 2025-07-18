async function getFullName(codeID, productsName) {
    console.log(codeID + '--' + productsName)
}

async function getProdutNome(productsName) {
    console.log("Produto = " + productsName)
}
module.exports = {
    getFullName,
    getProdutNome
};
