// é boleano, true or false, é pra comparação
console.log('01)', '1' == 1)  // vai ser true (igual)
console.log('02)', '1' === 1) // vai ser falso (estritamente igual)
console.log('03)', '1' != 1) // vai ser falso, !=  (significa diferente, n igual)
console.log('04)', '1' !== 1) // vai ser true, !== (estritamente não igual)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0) // esse date é uma data ai q usam de referencia
const d2 = new Date(0)
console.log('09)', d1 == d2)
console.log('10)', d1 === d2) // igual a linha 14
console.log('11)', d1.getTime() === d2.getTime())
console.log('12)', undefined == null)
console.log('13)', undefined === null)

// é melhor usar o estritamente igual pq ele leva em conta o TIPO
