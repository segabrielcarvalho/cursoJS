const clientes = {
    clientesSemVip: {
        nome: ["Marcos", "Gabriel", "julia", "Eduarda"]
    },
    clientesOuro: {
        nome: ["Marcos2", "Gabriel2", "julia2", "Eduarda2"]
    },
    clientesPlatinun: {
        nome: ["Marcos3", "Gabriel3", "julia3", "Eduarda3"]
    }
}

console.table(clientes.clientesSemVip.nome)
console.table(clientes.clientesOuro.nome)
console.table(clientes.clientesPlatinun.nome)

const paciente = {
    nome: "James T.",
    idade: 30,
    email: "jt@email.com",
    identicacao: "Alpha01259859",
    funcao:"comandante",
    peso: 80.1,
    altura: 1.80,
    calcularIMC:function(){
          return (this.peso/(Math.pow(this.altura,2)))
    },
    nomeCompleto:function(){
      console.log(this.nome)
    }
   }