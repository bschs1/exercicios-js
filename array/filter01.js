// outra forma de percorrer um array
// filtrar um array pra ter um subarray, por ex todos alunos com nota acima de 7, todos produtos marcados como frágil, clientes em débito
// filter usa true or false como retorno, diferente de map que o retorno era um array modificado 

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]

/*
console.log(produtos.filter(function(p) { // parametro p = cada um dos elementos. mas poderia receber 3 parametros (elemento, índice, array), parametro obrigado é o callback
     if (produtos.preco >= 10) {
        return console.log(`O Produto: ${produtos.nome} custa: ${produtos.preco}`)
     } else {
        return console.log(`O Produto ${produtos.nome} custa Menos de 10 reais`)
     }
}))
*/

                                          // 
/*console.log(produtos.filter(function(p) { // parametro p = cada um dos elementos. mas poderia receber 3 parametros (elemento, índice, array), parametro obrigado é o callback
    return p.preco > 2500   // jeito correto de fazer, tem q usar o parametro q vc passou oh bananão 
}))
*/


const caro = function(produto){
    return produto.preco >= 500
}
const fragil = function(produto){
    return produto.fragil
}

// Any expression after => in arrow functions becomes implicit return of function but You need to return explicitly in normal function using return keyword. 

// arrow
//const caro = produto => produto.preco >= 500
//const fragil = produto => produto.fragil




console.log(produtos.filter(caro).filter(fragil)) // se for fragil e caro vai printar