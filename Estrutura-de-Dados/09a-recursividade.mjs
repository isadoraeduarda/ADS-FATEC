// Fatorial de um numero naturl e igual a ele prorprio multiplicado por todos seus antecessores

function fatorial(n){
    let res = 1
    for(let i = n; i > 1; i--){
        res = res * i 
    }
    return res
}
console.log("Fatorial de 9: ", fatorial(9))
console.log("Fatorial de 8: ", fatorial(8))
console.log("Fatorial de 7: ", fatorial(7))
console.log("Fatorial de 6: ", fatorial(6))
console.log("Fatorial de 5: ", fatorial(5))
console.log("Fatorial de 4: ", fatorial(4))
console.log("Fatorial de 3: ", fatorial(3))
console.log("Fatorial de 2: ", fatorial(2))




