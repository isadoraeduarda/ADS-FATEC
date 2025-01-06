// Melhoria na ordenação, passa pelo codigo menos vezes
// TrABALHA RECURSIVIDADE
// Algoritmo de comparacao do tipo dividir para conquistar. 
// desvantagem, memoria

let comps = 0, divisoes = 0, juncoes = 0 

function mergeSort(vetor){
    if(vetor.length < 2){
        return vetor;
    }
    let meio = Math.floor(vetor.length / 2 )

    let vetEsq = vetor.slice (0, meio)
    let vetDir = vetor.slice (meio)

    divisoes++

    console.log({vetEsq, vetDir})

    vetEsq = mergeSort(vetEsq)
    vetDir = mergeSort(vetDir)

    let posEsq = 0
    let posDir = 0 
    let vetRes = []

    while(posEsq < vetEsq.length && posDir < vetDir.length){
        comps++
        if (vetEsq[posEsq] < vetDir[posDir]){
            vetRes.push(vetEsq[posEsq])
            posEsq++
        } else {
         vetRes.push(vetDir[posDir])
            posDir++;
    }
}

    let sobra;

    if(posEsq < posDir){
        sobra = vetEsq.slice(posEsq);
    } else {
        sobra = vetDir.slice(posDir);
    }
    juncoes++
    return[...vetRes, ...sobra]
        }

            
let nums = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11]
let numsOrd = mergeSort(nums)
console.log({numsOrd})
console.log({comps, divisoes, juncoes, memoriaMB})