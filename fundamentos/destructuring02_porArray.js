const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1,n3,n5,n6)

// array pode ter vários arrays

const [, [, nota]] = [[, 8, 8], [9, 6, 8]] // ignora o primeiro elemento [, e pega nota do segundo array
console.log(nota)

// esse tipo de destructuring é mtu ruim de LER entao n é mtu utilizado

