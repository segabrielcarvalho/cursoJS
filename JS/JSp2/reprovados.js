const nomes = [' João', ' Ana', ' Caio', ' Laura', ' Marjote', ' Leo']
const notas = [10, 4.999, 8, 7.5, 4, 6]

const reprovados = nomes.filter((_, indice) => notas[indice] < 5)

console.log(`Reprovados: ${reprovados}`)
