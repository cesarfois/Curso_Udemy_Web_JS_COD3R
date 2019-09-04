

const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charCodeAt(3)) // retorna o o codigo ASCII
console.log(escola.indexOf('d')) // retorna o valor do indice que achou o caracter
console.log()

console.log(escola.substring(1)) // retorna do 1 ate o final
console.log(escola.substring(0, 3)) // retorna do indice 0 ate o 3 nao incluindo o 3
console.log()

console.log('Escola '.concat(escola).concat("!")) // Concatenação
console.log('Escola ' + escola + '!') // Concatenaçao com +

console.log(escola.replace(3, '--------')) // reemplaza o 3 por '---------' pode usar regex

console.log('ana, maria, pedro'.split(',')) // cria um array