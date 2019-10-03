// importante utilizar o modulo relativo para importar os modulos
// Cuidado com Maiuscula ou Minuscula - Em Windows e Mac funciona mas em Linux NAO
// ../ volta para a pasta anterior 
// ./ significar que esta na mesma pasta
// o node tambem tem uma rotina para tentar encontrar os modulos
// posso importar modulos core, dos node.
// posso criar um arquvo index que o node vai procurar

// importando com caminho relativo
const moduloA = require('../../moduloA')
console.log(moduloA.ola)

// o node vai procurar as dependencias no arquivo index.
const c = require('./pastaC')
console.log(c.ola2)

// importando modulos core do node, nao precisa especificar so trazer o nome.
// const http = require('http')
// http.createServer((req, res)=> {
//     res.write('BOM DIA CESAR!')
//     res.end()
// }).listen(8080)
