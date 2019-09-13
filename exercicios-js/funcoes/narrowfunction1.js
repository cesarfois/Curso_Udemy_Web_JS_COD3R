
// funçao escrita de forma normal

let dobro = function (a) {
    return 2 * a
}

// funcao escrita de forma narrow
dobro = (a) => {
    return 2 * a
}

// funcao de uma unica linha return implicito

dobro = a => 2 * a

console.log(dobro(Math.PI))

//===============================================================

let ola = function (){
    return 'Olá'
}

// Escrita narrow

ola = () => 'Ola()'
ola = _ => 'Ola_'  // possui um parametro

console.log(ola())