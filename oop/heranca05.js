// funcionalidade de protótipos
// array, string e object são functions, ou seja tem prototype

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1,2,3,4,5].first())
console.log(['a','b','c','d','e'].first())

String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('escola cod3r'.reverse()) // n faz isso, TUDO GLOBAL É RUIM
