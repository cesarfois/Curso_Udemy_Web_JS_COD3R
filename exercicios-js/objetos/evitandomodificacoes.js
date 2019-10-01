console.log('====== Object.preventExtensions =====\n')
// o objeto pode ser modificado mas nao pode receber novos atributos diferente do freeze
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 342,
    tag: 'Promoção'
})

console.log('Extensivel', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'intento adicionar uma descrip. mas nao é possivel'
delete produto.tag // deletar sim é possivel.
console.log(produto)

console.log('\n====== Object.seal =====\n')
// com o metodo seal posso modificar valores, mas nao posso add nem deletar.

const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = "Silva" // nao posso adicionar.
delete pessoa.nome         // nao posso deletar o atributo
pessoa.idade = 29          // posso modificar um atributo ja existente.
console.log(pessoa)

console.log('\n====== Object.freeze =====\n')

// congela os atributos do objeto e nao podem ser modificados.