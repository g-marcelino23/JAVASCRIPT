
function encontrarImpares(valorInicial, valorFinal) {

  if (!Number.isInteger(valorInicial) || !Number.isInteger(valorFinal)) {
    console.log("Por favor, insira dois números inteiros.");
    return;
  }

  if (valorInicial > valorFinal) {
    [valorInicial, valorFinal] = [valorFinal, valorInicial];
  }

  console.log("Valores pares entre " + valorInicial + " e " + valorFinal + ":");

  for (let i = valorInicial; i <= valorFinal; i++) {
    // Verifica se o valor é par
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

encontrarPares(5, 15);

