// foreach forma de percorrer um array.

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, indice) {
    console.log( indice, nome )    
})
console.log('\n------------------ funcao arrow------------------------------\n')

aprovados.forEach(nome => {console.log(nome)})

console.log('\n------------------ funcao arrow 02 parametros ------------------------------\n')
aprovados.forEach((nome,indice) => {console.log(indice, nome)})

console.log('\n------------------Utilizando variaveis------------------------------\n')

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)