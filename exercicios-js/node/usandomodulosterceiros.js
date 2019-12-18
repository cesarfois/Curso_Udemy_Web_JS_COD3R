
// chamando o lodash nao precisa o aqui o caminho relativo
const _ = require('lodash')

// funcao numero randomico de 1 a 1000 com intervalo de
setInterval(() => console.log(_.random(1,100)), 200)

// sudo npm i -g nodemon
// nodemon posso fazer rodar o codigo e ver as alteraçoes em tempo real.
// cd node
// nodemon usandomodulosterceiros.js
//para rodar fazer - starting  `node nomedo arquivo.js`