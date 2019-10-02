// fazer meu proprio prototipo do metodo map

Array.prototype.map2 = function(callback) {
    const newarray = []
    for (let i = 0; i < this.length; i++){
        newarray.push(callback(this[i], i, this))
    }
    return newarray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}',
]


const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado2 = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado2)