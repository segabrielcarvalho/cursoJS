class cliente {
    constructor(nome, email, cpf, saldo){
    this.nome = nome
    this.email = email
    this.cpf = cpf
    this.saldo = saldo
    }
    depositar(valor) {
        this.saldo += valor
    }
    exibirSaldo() {
        console.log(this.saldo)
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

const gabriel = new clientePoup("Gabriel", "email@email.com", "5154513184", 100, 200)
console.log(gabriel)

gabriel.depositar(50)
gabriel.depositarPoup(50)

console.log(gabriel)