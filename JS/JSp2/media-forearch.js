const notas = [10, 6.5, 8, 7.5]
let somasDasNotas = 0

notas.forEach(notas => {
    somasDasNotas += notas
})

let media = somasDasNotas/notas.length
console.log(media )