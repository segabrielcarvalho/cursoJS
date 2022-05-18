const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJAVA = [6, 5, 8, 9, 5, 6]
const salaPyton = [7, 3.5, 8, 9.5]

function mediaSala(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum, 0)
    return somaDasNotas/notasDaSala.length
}
console.log(`Média das 3 salas foi ${mediaSala(salaJS)}`)
console.log(`Média das 3 salas foi ${mediaSala(salaPyton)}`)
console.log(`Média das 3 salas foi ${mediaSala(salaJAVA)}`)

const notas = [10, 6.5, 8, 7]

const media = notas.reduce((acum, atual) => atual + acum, 0) /notas.length
console.log(`A media do primeiro exercicio é: ${media}`)