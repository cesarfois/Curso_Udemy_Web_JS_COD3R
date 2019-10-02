// array é um objeto especial.
console.log(typeof Array, typeof new Array, typeof [])

// bom sempre trabalhar com tipos homogeneos dentro do array.
// é possivel trabalhar com diferentes tipos mas nao é recomendado

//Criaçao nao recomendada de array

let aprovados = new Array ('bia', 'carlos', 'Ana')
console.log(aprovados)
console.log('\n---------------------------------------------------------------------\n')
// Criaçao array literal, recomendada
aprovados =  ['bia', 'carlos', 'Ana']
console.log(aprovados[0])
console.log('\n---------------------------------------------------------------------\n')

// adicionando elementos.
aprovados[3] = 'cesar'
aprovados.push('alex') // recomendado.
console.log(aprovados)
console.log(aprovados.length)
// posso adicionar elementos numa outra posicao 
// os elementos intermedios ficam undefined.

aprovados[9] = 'Martin'
console.log(aprovados)
console.log(aprovados.length)
console.log('\n---------------------------------------------------------------------\n')
// verificando se o elemento é undefined
console.log(aprovados[8] === undefined )
console.log('\n---------------------------------------------------------------------\n')
// ordenando array
console.log(aprovados)
aprovados.sort()
console.log(aprovados)
console.log('\n---------------------------------------------------------------------\n')
// delete elemento mas continua o elemento como undefined
delete aprovados[1]

console.log('\n---------------------------------------------------------------------\n')
// funcao splice remove e add elementos (onde começa, quantos elementos 0 para nao deletar, add elem1, elemento, 2)

aprovados =  ['bia', 'carlos', 'Ana']
aprovados.splice(1, 2)
console.log(aprovados)
console.log('\n---------------------------------------------------------------------\n')
// funcao splice para add elementos
console.log(aprovados)
aprovados.splice(1,0,'elemento1', 'elemento2')
console.log(aprovados)

