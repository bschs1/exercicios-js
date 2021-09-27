// ternário usa 3 partes, nota >= 7 é uma, se for verdadeiro a priemira expressão (nota >= 7) vai retornar 'Aprovado' ou 'Reprovado'
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
console.log(resultado(7.1))
console.log(resultado(3))


// linha2: nota >= 7 (retorna true or false) a '?' serve p botar as outras duas, 'APROVADO' é a segunda, ai usa o ':' pra ir pra terceira é 'REPROVADO'
// o operador ternário ele retorna um valor baseado em uma pergunta e duas alternativas de respostas (entendi isso pelo menos)
