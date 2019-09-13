function criarProduto(nome, preco) {
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2200.00))
console.log(criarProduto('Mesa', 199.00))