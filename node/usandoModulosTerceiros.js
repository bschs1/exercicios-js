// instalando lodash: terminal > npm install lodash ou npm i lodash
//usando o lodash

// bibliotecas são referencias com o _ (underscore)

//usando o nodemon é tudo no terminal
// cd node > nodemon usandoModulosTerceiros.js
//o nodemon vai atualizando a execução na mesma hora baseado no código
const _ = require('lodash') // n precisa colocar o caminho relativo pra achar o lodash, ele vai procurar dentro de node_modules
setInterval(() => console.log(_.random(1,1000)), 2000) // o tempo que vai ficar executando vai no final o ,2000 ali quer dizer isto