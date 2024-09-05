import { nomes } from "./data/vetor-nomes.mjs";
let comps
function buscaSequencial(vetor, valorBusca) {
  comps = 0
  for (let i = 0; i < vetor.length; i++) {
    comps++
    if (vetor[i] === valorBusca) return i;
  }
  return -1;
}

console.time("Buscando ALEXANDRE...");
console.log("Posição de ALEXANDRE: ", buscaSequencial(nomes, "ALEXANDRE"), "comparações: ", comps);
console.timeEnd("Buscando ALEXANDRE...");

// const frutas = ["laranja", "maçã", "banana", "melancia", "abacaxi"];

// console.log("Posição de abacaxi: ", buscaSequencial(frutas, "abacaxi"));
// console.log("Posição de melancia: ", buscaSequencial(frutas, "melancia"));
// console.log("Posição de limão: ", buscaSequencial(frutas, "limão"));
