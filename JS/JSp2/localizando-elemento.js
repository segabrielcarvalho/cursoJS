const alunos = ['Melissa', 'Helena', 'Rodrigo', 'Gabriel']
const mediasDosAlunos = [10, 8.5, 6, 7]

//includes() -> booleano(verdadeiro ou falso)
//indexOf() -> retorna o número do indece

                           //[0]       //[1]
let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

const exibiNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return `${listaDeNotasEAlunos[0][indice]}, sua media é ${listaDeNotasEAlunos[1][indice]}`
    } else {
        return "O aluno não pertence a sala"
    }
}

console.log(exibiNomeNota("Gabriel"))