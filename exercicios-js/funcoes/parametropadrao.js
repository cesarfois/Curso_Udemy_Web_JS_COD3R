// estrategia 1 para gerar valor padrao

function soma1(a, b, c){

    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log (soma1()) // 3
console.log (soma1(3)) //  5
console.log (soma1(1, 2, 3)) // 6
console.log (soma1(0, 0, 0))   // BUG, resultado 3, nao assume o valor 0

// estrategia 2 , 3, 4 para gerar valor padrao
function soma2 (a, b, c){
    // caso a nao seja informado, se a for indefinido ou nulo v
    // valor padrao de a = 1
    a = a != undefined ? a : 1
    b = 1 in arguments ? b : 1
    // testar se c isNaN caso sim retorne 1 senao c (melhor opção)
    c = isNaN(c) ? 1 : c 
    return (a + b + c)
}

console.log (soma2()) // 3
console.log (soma2(3)) //  5
console.log (soma2(1, 2, 3)) // 6
console.log (soma2(0, 0, 0))   // ok retorna 0

// valor padrao do es2015

function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log (soma2()) // 3
console.log (soma2(3)) //  5
console.log (soma2(1, 2, 3)) // 6
console.log (soma2(0, 0, 0))   // ok retorna 0