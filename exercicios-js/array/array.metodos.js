const pilotos = ['vettel', 'alonso', 'raikkonen', 'massa']
pilotos.pop() // remove o ultimo elemento
pilotos.shift() // remove o primeiro elemento
console.log(pilotos)
console.log('\n---------------------------------------------------------------------\n')

pilotos.push('Verstappen' ) // add no final do array
pilotos.unshift('hamilton') // add no inicio do array
console.log(pilotos)
console.log('\n---------------------------------------------------------------------\n')


// adicionando com splice
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)
console.log('\n---------------------------------------------------------------------\n')

// removendo com splice da posiçao 3 , 1 elemento.
pilotos.splice(3, 1)
console.log(pilotos)
console.log('\n---------------------------------------------------------------------\n')

