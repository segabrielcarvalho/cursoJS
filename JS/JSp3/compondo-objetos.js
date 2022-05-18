const cliente = {
    nome: "Andre",
    idade:36,
    cpf: "12345678912",
    email: "andre@email.com",
    fone: ["61545569653", "65551515112"]
}

cliente.dependetes = {
    nome: "Gabriel",
    parentesco: "Filha",
    dataNascimento: "20/03/2011"
}

console.log(cliente)

cliente.dependetes.nome = "Gabriel Carvalho"

console.log(cliente)