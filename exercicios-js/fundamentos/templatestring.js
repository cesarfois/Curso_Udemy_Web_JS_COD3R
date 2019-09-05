const nome  = 'javier'

const template = `${nome}
no Template quebra da linha
    e espaços
!`

console.log(template)
console.log()
console.log(nome, template)

// utilizando funçoes

const passarmaiusculas = texto => texto.toUpperCase()
console.log(`Ei... ${passarmaiusculas('cuidado')}!`)