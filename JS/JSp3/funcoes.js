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
    },
    pontosExistentes: 5,

    adicionarPontos: function(pontos) {
        this.pontosExistentes += pontos
    }
}

// Antes da operação acontecer

console.log(`Esses são os valores Antigos`)
console.log(cliente.saldo)
console.log(cliente.pontosExistentes)


// Operação

cliente.depositar(30)//<----- Aqui é o valor a ser adicionado
cliente.adicionarPontos(100)//<----- Aqui é o valor a ser adicionado


//Depois da operação acontecer

console.log(`Esses são os novos valores`)
console.log(cliente.saldo)
console.log(cliente.pontosExistentes)
