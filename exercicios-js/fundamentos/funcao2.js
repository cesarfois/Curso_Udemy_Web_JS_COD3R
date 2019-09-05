
// Armanzenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log( a + b )
}
imprimirSoma(2, 3)

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}
console.log(  soma(4, 8) )

// retorno implicito arrow function
// <defino nome> = <parametros> < => funcao > <retorno a-b>
const subtracao = (a, b) => a - b

const imprimir2 = a => console.log(a)
imprimir2('utilizando uma narrow function para imprimir')


