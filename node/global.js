// console.log(global)

//como isso é global, todos outros módulos terão acesso, coisas globais normalmente são ruins pq a chance de dar caquita é grande
global.MinhaApp = {
  saudacao() {
    return 'Estou em todos Lugares';
  },
  nome: 'Sistema Legal',
};

function add(a, b) {
  return a + b;
}
