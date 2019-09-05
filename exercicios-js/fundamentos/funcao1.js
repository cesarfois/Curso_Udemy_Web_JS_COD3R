// Função sem retorno

function imprimirSoma(a,b){
    console.log( a + b)
}


imprimirSoma(2, 4)
imprimirSoma(2)   // NaN
imprimirSoma(2, 3, 4, 5) // pega os dos primeros valores e nao da erro. 
imprimirSoma() // NaN

console.log('===========================================================')

// Funcao com retorno

function soma(a = 10, b = 20){ //valores padroes = 20
    return a + b
}

console.log(soma(2, 3))  // resultado 5
console.log(soma()) // resultado 30
console.log(soma(1)) // resultado 21