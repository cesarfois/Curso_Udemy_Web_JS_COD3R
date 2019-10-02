// A ideia do Map passar um array para outro mas com os dados transformados exemplo o dobro

const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(elemento){
   return elemento * 2
})

console.log(resultado)