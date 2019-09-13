/* fabrica objetos
const prod1 ={
    nome: '....',
    preco: 45
}

onst prod2 ={
    nome: '....',
    preco: 45
}

onst prod3 ={
    nome: '....',
    preco: 45
}
*/
// Factory Simples
function criarPessoa(){
    return{
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
console.log(criarPessoa()) // cada vez que chama cria um novo objeto