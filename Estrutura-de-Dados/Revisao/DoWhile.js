function inteiroAleatorio(num) {
  const valor = Math.random() * num;
  return Math.floor(valor);
}

let opcao

do {
  opcao = inteiroAleatorio(15);
  console.log(`Opção escolhida foi ${opcao}`);
} while (opcao != 13);

console.log("FIM !!!");
