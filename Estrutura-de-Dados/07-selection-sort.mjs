let pass, comps, trocas

function selectionSort(vetor){
    pass = 0, comps = 0, trocas = 0 

    for (let posSel = 0; posSel < vetor.length - 1; posSel++){
        pass ++

        let posMenor = posSel + 1 

        for (let i = posMenor + 1; i < vetor.length; i++) { // i é a posicao menor

            if (vetor[posMenor] > vetor[i]){
                posMenor = i 
            }
            comps++
        }
        comps++

        if (vetor[posSel] > vetor [posMenor]){
        [vetor[posSel], vetor[posMenor]] = [ vetor[posMenor], vetor[posSel]]
        trocas++
        }
    }
}

// let nums = [ 77, 44, 22, 33, 99, 35, 55, 88, 0, 66, 11 ]

// selectionSort(nums)
// let memoriaMB = process.memoryUsage().heapUsed / 1024 / 1024
// console.timeEnd('Tempo da Ordenacao')
// console.log(nums)
// console.log({pass, comps, trocas})

import {nomes} from './data/nomes-desord.mjs'
console.time("Tempo de ordenacao")
selectionSort(nomes)
console.timeEnd('Tempo da Ordenacao')
console.log(nomes)
console.log({pass, comps, trocas})

let memoriaMB = process.memoryUsage().heapUsed / 1024 / 1024

