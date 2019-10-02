
// propotipar nosso proprio prototipo do filter
Array.prototype.filter2 = function(callback){
    const newarray  = []
    for (let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newarray.push(this[i])
        }
    }
    return newarray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad Pro', preco: 4100, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.00, fragil: true },
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false }
]



console.log('\n======================= Professor===========================\n')

const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil == true

console.log(produtos.filter2(caro).filter2(fragil))