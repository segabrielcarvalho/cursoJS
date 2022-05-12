
const nomes = [' João', ' Juliana', ' Ana', ' Caio',]

const sala1 = nomes.slice(0, nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)

console.log(`Alunos da sala 1: ${sala1}`)
console.log(`Alunos da sala 2: ${sala2}`) 

const nomes2 = [' João', ' Juliana', ' Ana', ' Caio',]

const Grupo1 = [nomes2[0], nomes2[3]]
const Grupo2 = [nomes2[1], nomes2[2]]
const Grupo3 = [nomes2[2], nomes2[1]]
const Grupo4 = [nomes2[3], nomes2[0]]

console.log(`O aluno 0 é ${Grupo1}`)
console.log(`O aluno 1 é ${Grupo2}`)
console.log(`O aluno 2 é ${Grupo3}`)
console.log(`O aluno 3 é ${Grupo4}`)