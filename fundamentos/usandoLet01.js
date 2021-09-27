let numero  = 1
{
    let numero = 2 // caso essa var se chamasse numero2 iria imprimir o numero la de cima
    console.log('dentro =', numero) // aqui imprimiria 1 caso numero ali em cima fosse numero2
}
console.log('fora =', numero)  // esse cód consegue printar 2 valores diferentes pois é let n var