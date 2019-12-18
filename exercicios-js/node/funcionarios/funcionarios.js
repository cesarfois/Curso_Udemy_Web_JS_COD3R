// pega o json da url com a biblioteca axios.


const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)
})