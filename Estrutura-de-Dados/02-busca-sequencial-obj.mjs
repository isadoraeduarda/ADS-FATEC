import { objNomes } from "./data/vetor-obj-nomes.mjs";

function buscaSequencial(vetor, fnComp) {
  for (let i = 0; i < vetor.length; i++) {
    if (fnComp(vetor[i])) return i;
  }
  return -1;
}

function comparaNome(obj) {
  return obj.first_name === "ALEXANDRE";
}
function comparaNome2(obj) {
  return obj.alternative_names=== "ROSELMO";
}

console.log("Posição de ROSELMO em alternative_names", buscaSequencial(objNomes, comparaNome2));
