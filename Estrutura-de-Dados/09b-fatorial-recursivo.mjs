function fatorialRec(n){
    if (n <= 1) {      //Confiçao de saida
        return 1
    }
    return n * fatorialRec(n-1)
}

console.log("Fatorial de 5: ", fatorialRec(5))
console.log("Fatorial de 4: ", fatorialRec(4))
console.log("Fatorial de 3: ", fatorialRec(3))
console.log("Fatorial de 2: ", fatorialRec(2))
