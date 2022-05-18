const cliente = {
    nome: "Andre",
    idade:36,
    cpf: "12345678912",
    email: "andre@email.com"
}

console.log(`O nome do cliente é ${cliente.nome}, sua idade é ${cliente.idade}, com o seu cpf ${cliente.cpf}, para enviar alguma informação a ele, mande no email: ${cliente.email}.`)

console.log(cliente.cpf.substring(0,3))