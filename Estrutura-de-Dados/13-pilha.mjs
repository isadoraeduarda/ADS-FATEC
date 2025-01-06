import Stack from "./lib/Stack.mjs";

let pilha = new Stack()

console.log(pilha.print())
console.log("Pilha está vazia:", pilha.isEmpty)

pilha.insert(5)
pilha.insert(10)
pilha.insert(9)
pilha.insert(2)
pilha.insert(4)

console.log(pilha.print())

let guardar1 = pilha.remove()
let guardar2 = pilha.remove()
console.log(pilha.print())
console.log(pilha.peek())

console.log("REMOVIDO1:", guardar1)
console.log("REMOVIDO2:", guardar2)

console.log("Pilha está vazia:", pilha.isEmpty)