const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '12345678912',
    email: 'andre@email.com',
    fone: [ '61545569653', '65551515112' ],
    dependetes: [
       {
        nome: 'Gabriel Carvalho',
        parentesco: 'Filho',
        dataNascimento: '20/03/2011'},
       {
        nome: "Samila Maria",
        parentesco: "Filha",
        dataNascimento: "01/01/2014"}
    ],
    saldo: 0,
    depositar: function(valor){
        this.saldo += valor 
    }
}

let relatorio = ""

for (let info in cliente) {
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function") {
        continue
    } else {
        relatorio += `
        ${info}: ${cliente[info]}
        `
    }
}

console.log(relatorio)