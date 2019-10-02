const pilotos = ['vettel', 'alonso', 'raikkonen', 'massa']
pilotos.pop() // remove o ultimo elemento
pilotos.shift() // remove o primeiro elemento
console.log(pilotos)
console.log('\n---------------------------------------------------------------------\n')

pilotos.push('Verstappen' ) // add no final do array
pilotos.unshift('hamilton') // add no inicio do array
console.log(pilotos)
console.log('\n----------------------------- SPLICE ----------------------------------------\n')


// adicionando com splice
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)
console.log('\n---------------------------------------------------------------------\n')

// removendo com splice da posiçao 3 , 1 elemento.
pilotos.splice(3, 1)
console.log(pilotos)
console.log('\n------------------------------- SLICE --------------------------------------\n')

// Metodo slice retorna um novo array( posicao inicial, posicao final(nao incluida))
const pilotos1 = pilotos.slice(2) // senao identifica vai ate o final.
console.log(pilotos1)
console.log('\n---------------------------------------------------------------------\n')
const pilotos2 = pilotos.slice(1, 4) // 4 nao incluso
console.log(pilotos2)
console.log('\n---------------------------------------------------------------------\n')
const pilotos3 = pilotos.slice(-2) // pega os dois ultimos
console.log(pilotos3)
