const user = {
    nome: "Juliana",
    emai: "email@email.com",
    nascimento: "21/06/2022",
    role: "estudante",
    ativo: true,

    exibirInfos: function() {
        console.log(this.nome, this.emai)
    }
}

const admim = {
    nome: "Gabriel",
    emai: "email2@email.com",
    nascimento: "22/06/2022",
    role: "admim",
    ativo: true,
    criarCurso() {
        console.log('curso criado')
    }
}

Object.setPrototypeOf(admim, user)
admim.criarCurso()
admim.exibirInfos()