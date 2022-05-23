const cliente = {
    nome: 'Gabriel',
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

function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj)
    if(propsClientes.includes("dependetes")) 
    {
        console.log(`Oferta de Seguro de Vida disponivél para ${obj.nome}`)
    } else {
        console.log(`Você escreveu errado boco`)
    }
}
console.log(Object.entries(cliente))
oferecerSeguro(cliente)