
function Aula(nome, numero) {
    this.nome = nome
    this.numero = numero
}

const aula1 = new Aula("Bem Vindo", 123)
const aula2 = new Aula('Ate breve', 456)

console.log(aula2, aula1)