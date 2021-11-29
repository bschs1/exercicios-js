// Any expression after => in arrow functions becomes implicit return of function but You need to return explicitly in normal function using return keyword. 

// IMPORTANTE :  if you have only one parameter, you can skip the parentheses


// função normal:
let dobro = function (a) {
    return 2 * a
}

// a msm em arrow agr:
dobro = (a) => {
    return 2 * a
}

// funções arrows = são sempre anonimas mas da p salvar em variaveis

// outro modo:

dobro = a => 2 * a // return implicito

console.log(dobro(Math.PI))

// função normal retornando olá
let ola = function () {
    return 'Olá!'
}

// agr em arrow:

ola = () => 'Olá!'

console.log(ola())