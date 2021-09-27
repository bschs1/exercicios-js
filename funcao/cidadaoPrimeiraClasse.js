// first class objective, first class citizen
// tu pode usar função como um dado, retornando coisas e tals
// pode ter função dentro de função, pode ser armazenada em variaveis e tals
// HIGH ORDER FUNCTION

// criar função literal: (usar o function)
function fun1() {
}

// pode cirar função dentro de variaveis
const fun2 = function() {
}

// pode armazenar funcao em array:
const array = [function(a,b) {return a + b}, fun1, fun2]
console.log(array[0](2,3)) 

// em objetos:
const obj = {}
obj.falar = function() {
    return 'Opa!'
}
console.log(obj.falar())

// passar função como parâmetro:
function run(fun) {
    fun()
}
run(function(){console.log('executando....')})

// uma função pode retornar/conter uma função:
function soma(a,b) {
    return function(c) {
        console.log(a + b + c)
    }
}
soma(2,3) // o resultado de soma(2,3) vai gerar a função c como resultado, ai pra invocar ela coloca () assim:
soma(2,3)(4)
// pode salvar a função acima em variavel assim ó:
const cincoMais = soma(2, 3)
cincoMais(4)
// pode ser chamada assim também
soma(2,3,4) // mais facil porem o outro tem suas vantagens