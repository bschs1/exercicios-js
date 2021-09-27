let a = 3

global.b = 123
this.c = 456 // vai exportar isso pra fora do arquivo, virando um módulo (NO NODE(BACKEND))
this.d = false
this.e = 'teste'

console.log(this.a) // n funfa
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando uma variavel maluca, SEM VAR E LET, ela vai pro GLOBAL E ISSO É PESSIMO
abc = 3
console.log(global.abc)

module.exports = { e: 456, f: false, g: 'teste'}