function compras (trabalho1, trabalho2 )    {
    const comprarSorvete =  trabalho1 || trabalho2           // o '||' (é o OU do javascript)
    const comprarTv50 = trabalho1 && trabalho2               // o '&&' (é o AND do javascript)
    // const comprarTv32 = !!(trabalho1 ^ trabalho2)         // o !! é o bitwise XOR 
    const comprarTv32 = trabalho1 != trabalho2               // trabalho1 é diferente de trabalho 2 
    const manterSaudavel = !comprarSorvete                   // operador unário

//  return { sorvete: comprarSorvete,}                       // jeito padrão
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}     // é um objeto chave valor, jeito novo
}
console.log(compras(true,true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

/*
v e v -> verdadeiro
v e f -> falso
v e qlqr coisa -> falso

pra ser verdadeiro todos tem q ser verdadeiros

op1 e op2 e op3 e op4 -> verdadeiro se TODOS forem verdadeiros, se um só for falso vai ser td falso.

f e f -> falso


v xor v -> falso
v xor f -> verdadeiro
f xor f -> verdadeiro
f xor f -> falso

os iguais é falso, os diferentes são verdadeiros

!v -> falso
!f -> verdadeiros
*/
