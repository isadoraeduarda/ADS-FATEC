//Double ended queue
//Lista linear de acesso restrito, que permite apenas as operacoes de 
//enfileiramento (Inserte Bakc, Insert Front) e desenfileiramento (Remove Front e Remove Back).

import Deque from "./data/lib/Deque.mjs";

let listacompras = new Deque();


console.log("Lista de compras: ");
console.log("A lista de compras está vazia? " + listacompras.isEmpty);

//Alimenticios -> Inicio
console.log("## Lista de compras ###");
listacompras.insertFront("Arroz");
listacompras.insertFront("Feijão");
listacompras.insertFront("Carne");
listacompras.insertFront("Macarrão");

console.log(listacompras.print());


//Higiene e Limpeza -> Final
listacompras.insertBack("Sabonete");
listacompras.insertBack("Detergente");
listacompras.insertBack("Desinfetante");

console.log(listacompras.print());

listacompras.insertFront("Café");
listacompras.insertBack("Sabão em pó");

console.log(listacompras.print());

let removido = listacompras.removeBack();
console.log("Item removido do final " + removido)
console.log(listacompras.print());

removido = listacompras.removeFeont();
console.log("Item removido do inicio " + removido)
console.log(listacompras.print());

console.log("O primeiro item da lista é: " + listacompras.peekFront);
console.log("O ultimo item da lista é: " + listacompras.peekBack);