const clientes = [
    {
        nome: 'Gabriel',
        idade: 36,
        cpf: '12345678912',
        email: 'gabis@email.com',
        fone: [ '61545569653', '65551515112' ],
        dependetes: [
           {
            nome: 'Gabriel Carvalho',
            parentesco: 'Filho',
            signo: "Escorpião",
            dataNascimento: '20/03/2011',
            
        },
           {
            nome: "Henrique",
            signo: "Escorpião",
            parentesco: "Filho",
            dataNascimento: "01/01/2030"}
        ],
    }, 
    {
        nome: 'Isadora',
        idade: 35,
        cpf: '1234515158912',
        email: 'isa@email.com',
        fone: [ '615455185653', '655474845112' ],
        dependetes: [
           {
            nome: 'Isis',
            parentesco: 'Filha Mais Velho',
            signo: "Sagitário",
            dataNascimento: '20/03/2029'},
           {
            nome: "Ethan",
            parentesco: "Filho",
            signo: "Libra",
            dataNascimento: "01/01/2028"}
        ]
    }
]

const test = {...clientes[0]}
const listaDependentes = [...clientes[0].dependetes, ...clientes[1].dependetes]

console.table(test)
console.table(listaDependentes)