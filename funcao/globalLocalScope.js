/* 
## O Comportado do 'this' depende do:
1. Escopo e Contexto
2. Modo Estrito 

Escopo(scope): 
- tem acesso as funções, variaveis e objetos NUMA PARTE DO CÓDIGO DURANTE O TEMPO DE EXECUÇÃO
- uma função = um escopo


Contexto (context):
- SE REFERE APENAS AO VALOR DO THIS NO MSM ESCOPO
- pode ser mudado com funções especiais como: apply(), call() bind()
- (contexto de execução = escopo)

tem dois tipos de scopes:

1 - global:
    1. no momento em que começamos a codar
    2. enquanto existe a aplicação
2 - local:
    1. dentro de uma função, as variaveis são do escopo local
    2. existe enquanto a função / objeto existirem


## MODO ESTRITO:
- muda a semantica do JS
- opcional
- 'use strict'
*/ 

//--------------------------------------------------------------------------

// global scope:

this.name ='Bruno'
console.log(this)

function sayMyName() {
    // LOCAL SCOPE
    console.log(this.name)
}
sayMyName()     // vai printar undefined