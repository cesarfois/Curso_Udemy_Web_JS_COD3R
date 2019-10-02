aprovados =  ['bia', 'carlos', 'Ana']

// adicionando elementos.
aprovados[3] = 'cesar'
aprovados.push('alex') // adiciona no final do array
aprovados.unshift('hamilton') // add no inicio do array


console.log(aprovados.length)
// ordenando array altera o array original
aprovados.sort()

// delete elemento mas continua o elemento como undefined
delete aprovados[1]

aprovados.pop() // remove o ultimo elemento
aprovados.shift() // remove o primeiro elemento


// funcao splice remove e add elementos (onde começa, quantos elementos 0 para nao deletar, add elem1, elemento, 2)

aprovados =  ['bia', 'carlos', 'Ana']
aprovados.splice(1, 2)
console.log(aprovados)

// funcao splice para add elementos
console.log(aprovados)
aprovados.splice(1,0,'elemento1', 'elemento2')
console.log(aprovados)
console.log('\n---------------------------------------------------------------------\n')
// Metodo slice retorna um novo array( posicao inicial, posicao final(nao incluida))
const pilotos = ['vettel', 'alonso', 'raikkonen', 'massa']
const pilotos1 = pilotos.slice(2) // senao identifica vai ate o final.
console.log(pilotos1)
console.log('\n---------------------------------------------------------------------\n')
const pilotos2 = pilotos.slice(1, 4) // 4 nao incluso
console.log(pilotos2)
console.log('\n---------------------------------------------------------------------\n')
const pilotos3 = pilotos.slice(-2) // pega os dois ultimos
console.log(pilotos3)