/*INSTRUÇÕES

1. Faça uma função recursiva que receba um número inteiro positivo N e
imprima utilizando o console.log(), todos os números pares de 0 até N em
ordem decrescente.

*/

function imprimir_pares_decrescente(N){
    if (N <= 0){
        return N 
    }
    if (N % 2 === 0){
        console.log(N)
    }
    imprimir_pares_decrescente(N-1)
}

imprimir_pares_decrescente(20)