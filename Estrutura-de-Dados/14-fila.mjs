import Queue from "./lib/Queue.mjs";

let fila = new Queue()

console.log("está vazia?"+ fila.isEmpty)

//inserções na fila
fila.enqueue('Alexandre')
fila.enqueue('José')
fila.enqueue('Joaquim')
fila.enqueue('João')
fila.enqueue('Maria')

console.log(fila.print())
console.log("está vazia?"+ fila.isEmpty)

//remoção na fila
let atendido = fila.dequeue()
console.log({atendido})
let proximo = fila.peek()
console.log({proximo})

console.log(fila.print())

fila.enqueue('Sergio')
fila.enqueue('Leonardo')
fila.enqueue('Kaio')
console.log(fila.print())