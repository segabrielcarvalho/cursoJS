const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '12345678912',
    email: 'andre@email.com',
    fone: [ '61545569653', '65551515112' ],
    dependetes: 
    [{
        nome: 'Gabriel Carvalho',
        parentesco: 'Filho',
        dataNascimento: '20/03/2011'
    }]
}

cliente.dependetes.push({
    nome: "Matheus Carvalho",
    parentesco: "Irmão",
    dataNascimento: "01/02/2014"
})

console.log(cliente)

const filhaMaisNova = cliente.dependetes.filter(dependente => dependente.dataNascimento === "01/02/2014")

console.log(filhaMaisNova[0].nome)