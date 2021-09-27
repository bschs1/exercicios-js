console.log(typeof Object) // aqui é uma função
console.log(typeof new Object) // aqui virou um objeto

const Cliente = function() {} 
console.log(typeof Cliente) // função
console.log(typeof new Cliente) // objeto

// cada vez que colocamos o typeof new Cliente ele vira objeto, pode ter parametros tipo Cliente()

// criando classe

class Produto {} // ES 2015 {ES6}
console.log(typeof Produto)
console.log(typeof new Produto()) // com parâmetro

// pra criar objetos podemos usar funções pra isso (td q fiz agora foi isso sepa)