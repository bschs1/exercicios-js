let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!true)

console.log(' verdeiros: ') // todos são true menos 0, todos abaixo sao verdadeiros.
console.log(!!3)
console.log(!!-1)
console.log(!!' ') // string com espaço = true
console.log(!!'TEXTO')
console.log(!![]) // array verdadeiro
console.log(!!{}) // objeto literal 
console.log(!!Infinity) // verdadeiro
console.log(!!(isAtivo = true)) // atribuição verdadeira

console.log('falsos: ')
console.log(!!0)
console.log(!!'') // string vazia = falso
console.log(!!null) // nulo = falso
console.log(!!NaN) // not a number = falso
console.log(!!undefined) // n definido = falso
console.log(!!(isAtivo = false)) // atraibuíção falsa

console.log('finalizando: ')
console.log(!!('' || null || 0 || ' ')) // o unico valor verdaeiro é o último, e ira retornar o unico verdadeiro

{ // que este bloco tá fazendo é: se n preencher nome irá preencher colocando desconhecido
    let nome = ''
    console.log(nome || 'Desconhecido')  
}
