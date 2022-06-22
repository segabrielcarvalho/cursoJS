class User {
    constructor(nome, email) {
        this.nome = nome
        this.email = email

        this.exibirInfos = function () {
            return `${this.nome}, ${this.email}`
        }
    }
}

const novoUser = new User('Gabriel', 'g@g.com')
console.log(novoUser.exibirInfos())

function Admin(role) {
    
}