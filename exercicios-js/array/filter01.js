// percorrer o elemento 
// todos os produtos marcados como fragil.

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 4100, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.00, fragil: true },
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false }
]

// filter tem 4 parametros(callback(elementos.), index, array, thisARG)
// entre chaves{ colocamos uma logica}
console.log(produtos.filter(function(p){
    return true
}))

console.log('\n======================= todos ===========================\n')
console.log(produtos.filter(function(p){
    return true
}))
console.log('\n======================= nenhum ===========================\n')
console.log(produtos.filter(function(p){
    return false
}))

console.log('\n======================= produtos preco > 2000 ===========================\n')
console.log(produtos.filter(function(p){
    return p.preco > 2000
}))

console.log('\n======================= produtos > 500 e fragil ===========================\n')
console.log(produtos.filter(function(p){
    return (p.preco > 500  & p.fragil == true)
}))

console.log('\n======================= produtos > 500 e fragil Professor===========================\n')

const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil == true

console.log(produtos.filter(caro).filter(fragil))