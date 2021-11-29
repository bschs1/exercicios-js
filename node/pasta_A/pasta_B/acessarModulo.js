const modulo_A = require('../../modulo_A') // ../../ estou voltando duas pastas
console.log(modulo_A.ola) // isso funciona msm que não está escrito certinho, TEM QUE RESPEITAR LETRAS MAIÚSCULAS E MINUSCULAS

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pasta_C/index')
console.log(c.ola2)

//modulo http
/* const http = require('http')
http.createServer((req, res) =>  {
    res.write('Bom dia')
    res.end()
}).listen(8080)   // abrir no browser: localhost:8080 */