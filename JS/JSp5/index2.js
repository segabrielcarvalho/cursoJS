import { edFolha } from "./arrays.js"

function mergeSort(array) {

  if (array.length > 1) {
    const meio = Math.floor(array.length / 2);
    const parte1 = mergeSort(array.slice(0, meio));
    const parte2 = mergeSort(array.slice(meio, array.length));
    array = ordena(parte1, parte2);
  }

  return array;
}

  function ordena(parte1, parte2) {
    let posicaoAtualL1 = 0;
    let posicaoAtualL2 = 0;
    const resultado = [];

      while (posicaoAtualL1 < parte1.length && posicaoAtualL2 < parte2.length) {
        let produtoAtualL1 = parte1[posicaoAtualL1];
        let produtoAtualL2 = parte2[posicaoAtualL2];

          if (produtoAtualL1.preco < produtoAtualL2.preco) {
            resultado.push(produtoAtualL1);
            posicaoAtualL1++;
          } else {
            resultado.push(produtoAtualL2);
            posicaoAtualL2++;
          }
      }

      return resultado.concat(posicaoAtualL1 < parte1.length
        ? parte1.slice(posicaoAtualL1)
        : parte2.slice(posicaoAtualL2));
}

console.log(mergeSort(edFolha));


