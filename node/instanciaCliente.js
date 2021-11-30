const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() // vai retornar a factory function, precisa do () pra retornar um OBJETO (to chamando a função factory)
const contadorD = require('./instanciaNova')()

// testando
contadorA.incremento()
contadorB.incremento()
console.log(contadorA.valor ,contadorB.valor) // o valor de A interfere no valor de B pq n é uma nova instancia
// muda pq o node faz caching, o que eu fizer no contador A o contador B vai saber.

contadorC.incremento()
contadorC.incremento()
console.log(contadorC.valor ,contadorD.valor) // nesse caso como são novas instancias, o valor de C n interfere no valor de D