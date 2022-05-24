class cliente {
    constructor(nome, cpf, email, saldo) {
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.saldo = saldo
        this.depositar = function (valor) {
            this.saldo += valor
        }
    }
}

class clientePoup extends cliente {
    constructor(nome, cpf, email, saldo, saldoPoup) {
    super(nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
    }
    depositarPoup(valor) {
        this.saldoPoup += valor
    }
}

const ju = new clientePoup("Ju", "11122233344", "Ju@email.com", 100, 200)

console.log(ju)

clientePoup.prototype.depositarPoup = function(valor) {
    this.saldoPoup += valor
}
ju.depositarPoup(50)
console.log(ju.saldoPoup)