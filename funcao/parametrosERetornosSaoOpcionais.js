function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area} m2`) // n vai retornar
    } else {
        return area // vai retornar a area
    }
}

console.log(area(2, 2))
console.log(area(2)) // NAN
console.log(area()) //  NAN
console.log(area(2,3,4,5,6)) // pode ter vários parametros mas so vai usar os 2 primeiro pq eles tao na função
console.log(area(5,5)) //vai imprimir 25 mas UNDEFINED
