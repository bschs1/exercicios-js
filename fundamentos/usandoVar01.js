{
    {
        {
            
              { var sera = 'Será???' }
              console.log(sera)
        }
    }
}
// a variável var ficara visivel p todos, n só pra quem está no bloco.

console.log(sera)

function teste() {
    var local = 123 // variavel da FUNÇÃO, n existe fora dela.
    console.log(local)
}

teste()
// console.log(local)  n consegue acessar a var local pq está DENTRO da função, msm coisa q python
// usar variáveis GLOBAIS são ruins, qualquer sobreescrita da variavel fode tudo
// porem usar var GLOBAl pd ser acessada por todos entao tem sua vantagem ai hein gay
// isso q to falando é pro NODE
// 