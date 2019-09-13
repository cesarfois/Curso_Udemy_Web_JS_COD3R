// Closures é o escopo criado quando um funcao é declarada
// Esse escop permite a funcao acessar e manipular variáveis externas a funcao


// Contexto léxico em ação!


const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())