// uma factory retorna uma nova instancia, um novo objeto

module.exports = () => {
    return {
        valor: 1,
        incremento () {
            this.valor++
        }
    }
}