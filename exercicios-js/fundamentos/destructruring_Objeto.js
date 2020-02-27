// Tira elementos de uma estrutura
// Exemplos de um objeto

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// Tire o nome e idade do objeto pessoa
const {nome, idade} = pessoa
console.log(nome, idade)

// Tire o nome e idade do objeto pessoa e criei duas variaveis n e i
const {nome: n, idade: i }  = pessoa
console.log(n, i)

const { endereco: { logradouro, numero}} = pessoa
console.log(logradouro,',', numero)