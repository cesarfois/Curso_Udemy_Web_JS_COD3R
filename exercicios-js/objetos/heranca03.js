const pai = { nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai) // hereda todos os atributos do pai
filha1.nome = 'Ana' // mudei o atributo da filha "nome"
console.log(filha1.corCabelo) // vai trazer a cor do cabelo do objeto pai. 

console.log('\n ============================== \n')

const filha2 = Object.create(pai,{
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`) // pega a cor do cabelo do pai

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

console.log('\n ============================== \n')

// todos os atributos sendo impresso
for (let i in filha1){
    console.log(i)
}

// verificando se o atributo realmente pertence a ela.
console.log('\n ============================== \n')

for (let i in filha2){
    filha2.hasOwnProperty(i) ?
    console.log(i) : console.log(`Por Herança: ${i}`)
    // imprime i ":" senao imprime por herança i 
}


console.log('\n ============================== \n')
