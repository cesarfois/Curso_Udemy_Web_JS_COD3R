// exercicio mulher chinesa com menor salario.

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// fazendo o filtro somente dos funcionarios chineses
// constante chineses retorna true, china.
const chineses = f => f.pais === 'China'
// fazendo o filtro somente se sao mulheres
const mulheres = f => f.genero === 'F'
// procuro o menor salarios funcao redux
// temos 2 parametros, primeiro ACUMULADOR e o segundo o elemento atual.
// se o func.salario for menor que o funcionario.atual.salario ? entao retorne o func : caso contrario
// retorne funcionario atual
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})


