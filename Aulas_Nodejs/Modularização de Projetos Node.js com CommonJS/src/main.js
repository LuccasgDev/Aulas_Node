const p = require("../src/service/products.js");
const c = require("../src/service/config.js")

async function main() {
console.log("MAIN")
p.getFullName(506,"teste")
p.getFullName(507,"teste2")
p.getProdutNome("teste3")

console.log(c.produto)
}

main()