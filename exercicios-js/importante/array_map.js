// A ideia do Map passar um array para outro mas com os dados transformados exemplo o dobro
// o array sempre entrega a quantidade de elementos e nao modifica o array original.

const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(elemento){
   return elemento * 2
})
console.log(resultado)

console.log('\n ===================  Utilizando Arrow ================ \n')
// multiplicando x3 utilizando arrow function return implicito

let resultado_x3 = nums.map( elemento => elemento * 3)
console.log(resultado_x3)

console.log('\n =================== ================ \n')

// Utilizando 03 Map Consecutivos

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado_RS = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado_RS)



