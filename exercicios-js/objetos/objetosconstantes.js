// pessoa -> 123  ->{...}
// Objeto pessoa aponta para um endereço que aponta para o objeto
const pessoa = { nome: 'cesar'}
pessoa.nome = "Raul"

console.log(pessoa)

// pessoa = {nome: 'Ana'}
// nao é possivel atribuir duas vezes um objeto

Object.freeze(pessoa)
// ele congela o objeto e ignora qualquer alteraçao
pessoa.nome = 'Maria'
console.log(pessoa.nome)

// criar do inicio o um objeto constante com freeze
const pessoaconstante = Object.freeze({ nome: 'Marcos'})
console.log(pessoaconstante)