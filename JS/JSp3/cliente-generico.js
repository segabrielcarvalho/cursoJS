class cliente {
    constructor(nome, cpf, email, saldo) {
        this.nome = nome
        this.cpf =  cpf
        this.email = email
        this.saldo = saldo
        this.depositar = function (valor) {
            this.saldo += valor
        }
    }
}

const gabriel = new cliente("Gabriel", "11122233344", "gabriel@email.com", 100)

console.log(gabriel)