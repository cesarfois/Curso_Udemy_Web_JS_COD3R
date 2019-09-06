// par nome  valor

const saudacao = 'opa' // contexto lexico 1

function exec() {
    const saudacao = 'fala' // contexto lexico 2
    return saudacao
}

// Objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: 'Rua Medina, 802',
        CEP: '12222-900'
    }
}


console.log(saudacao)
console.log(exec())
console.log(cliente)
console.log(cliente.endereco.CEP)