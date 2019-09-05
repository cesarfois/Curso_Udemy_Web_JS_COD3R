const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10 // adicionando valores

console.log(valores.length) // length retorna o numero do array

valores.push({id: 3}, false, null, 'teste') // push adiciona novos elementos
// diferentes elementos
console.log(valores)
console.log()
// deletar valores pop e delete
valores.pop() // deleta o ultimo elemento do array
console.log(valores)

delete valores[4]
console.log(valores[4])

console.log(typeof valores)

