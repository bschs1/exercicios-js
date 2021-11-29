// nomes com clientes = classe que vai usar outros módulos

// usando outros módulos, importando:
const modulo_A = require('./modulo_A.js') // ./ usa-se quando é o caminho relativo, pq é na mesma pasta
const modulo_B = require('./modulo_B.js') // se o arquivo for .js n precisa por, mas por convenção é melhor buta

console.log(modulo_A.ola)
console.log(modulo_A.bemVindo)
console.log(modulo_A.ateLogo)
console.log(modulo_A)

console.log(modulo_B.bomDia)
console.log(modulo_B.boaNoite())
console.log(modulo_B)