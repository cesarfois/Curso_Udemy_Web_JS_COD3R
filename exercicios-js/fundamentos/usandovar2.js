
// sobrescreve o valor e imprime 2 valores cuidado com o escopo global 
var numero = 1
{
    var numero = 2
    console.log ('dentro = ', numero)
}

console.log('fora =', numero)