const chaves = ["nome", "idade", "cpf", "email"]

const cliente = {
    nome: "Andre",
    idade:36,
    cpf: "12345678912",
    email: "andre@email.com"
}

//console.log(`${cliente[chaves[0]]}`)

chaves.forEach(info => console.log(cliente[info]))