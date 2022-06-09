import { Negociacao } from "./models/negociacao.js";
const negociacao = new Negociacao({ data: new Date(), quantidade: 10, valor: 100 });
console.log(negociacao.volume);
