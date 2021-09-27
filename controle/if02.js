/*function teste1(num) {
    if(num > 7)
        console.log(num)
        console.log('final') // COMO N TEM O BLOCO DE CÓDIGO {} n reconhece essa linha
        LINHA 4 N TEM RELAÇÃO COM O IF DA LINHA 2
}
*/

function teste1(num) {
    if(num > 7) {
        console.log(num)
        console.log('final') // COMO N TEM O BLOCO DE CÓDIGO {} n reconhece essa linha        
    }
}


teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); {              // como o CÓDIGO TEM ; ISSO é meio q um ponto final entao o console.log(num) n se liga com o IF ou qlqr loop
        console.log(num)
    }
}

teste2(6)
teste2(8)

// USAR ; N PODE COM LOOPS.
// LOL