const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}',
]

console.log('===================== Minha resoluçao ===============================')

let novo = carrinho.map(e => JSON.parse(e))
console.log(novo)
let resultado = novo.map(e => e.preco)
console.log(resultado)


console.log('====================== Resoluçao professor ==============================')

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado2 = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado2)