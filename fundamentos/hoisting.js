// o que é essa porra?
// significa "jogar pra cima"
// em javascript tu pode declarar um var dps que sofrerá esse hoisting, que é jogar la pra cima
// com isso o programa n vai cagar tudo igual em outras linguagens  
// n tem mtu pq usar isso, MAS DÁ PRA USAR
console.log('a =', a) // essa vai ficar undefined
var a = 2
console.log('a =', a) // agora a vale 2, vai rolar o hoising ou 'issamento' (sla como escreve)

function teste()  {          // da pra usar com função também
    console.log('a =', a) 
    var a = 2
    console.log('a =', a)
}
teste()

// n FUNCIONA COM "LET"