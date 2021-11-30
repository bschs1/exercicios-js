// o this aponta pra module.exports, ele serve pra você transformar algo em publico

//comparações:
console.log(this === global) //this n é extritamente igual a global
console.log(this === module) //false tb!
console.log(this === module.exports) // verdadeiro!
console.log(this === exports) //true

function logThis() { //acessando uma função dentro de um módulo
    console.log('dentro de uma função...')
    console.log(this === exports) // falso
    console.log(this === module.exports) //false tb!
    console.log(this === global) // vai retornar true, dentro de uma função ele aponta pra global

    this.perigo = 'pipipi' //isso aqui por exemplo, estaria colocando o perigo no escopo global!
}

logThis()

// this aponta pra exports se ele tiver fora de uma função, se ele tiver dentro ele n vai apontar, msm coisa com module.exports