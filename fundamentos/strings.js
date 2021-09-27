const escola = "Cod3r"

console.log(escola.charAt(4)) // começa a contar no 0 que nem python, e vai mostrar qual a letra ta no 4
console.log(escola.charAt(6)) // como n tem 6, retorna vazio / null
console.log(escola.charCodeAt(3)) // mostrará o valor do índice 3 na tabela unicode
console.log(escola.indexOf(3)) // processo contrário 

console.log(escola.substring(1)) // começa do índice 1
console.log(escola.substring(0, 3)) // vai do índice 0 (incluíndo ele), até o 3 (n incluíndo)
// linha 9 - vai do 0 até o final, n incluí o final (3)

console.log ('escola '.concat(escola).concat("!")) // vai concatenar um literal (coisa n salva em variavel) variavél.)
console.log(escola.replace(/\d/, 'e')) // o /\d/ = expressão regular (substitui todos digitos dentro do texto pela letra 'e')
console.log(escola.replace(3, 'e')) // substituí onde tem 3 por 'e'

console.log('Ana,Maria,Luke'.split(',')) // transforma em array, separando por vírgula
