// ------- ARROW FUNCTIONS -------

function apresentar(nome1) {
    return `meu nome é ${nome1}`
}

const apresentarArrow = nome => `meu nome é ${nome}`
const soma = (num1 , num2) => num1 + num2

const somaDeNumeros = (num1, num2) => {
    if (num1 || num2 > 10) {
        return "Somente números de 1 a 10"
    } else {
        return num1 + num2
    }
} 