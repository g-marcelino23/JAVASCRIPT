// Função para calcular o n-ésimo termo de Fibonacci
function calcularFibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return calcularFibonacci(n - 1) + calcularFibonacci(n - 2);
  }
}

// Função para gerar um array com os n termos de Fibonacci
function gerarArrayFibonacci(n) {
  var fibonacciArray = [];

  for (var i = 0; i < n; i++) {
    fibonacciArray.push(calcularFibonacci(i));
  }

  return fibonacciArray;
}

// Solicita ao usuário que digite o número de termos desejado
var numeroDeTermos = parseInt(prompt("Digite o número de termos de Fibonacci desejado:"));

// Verifica se o número de termos é válido
if (isNaN(numeroDeTermos) || numeroDeTermos < 1) {
  console.log("Por favor, digite um número inteiro positivo.");
} else {
  // Chama a função para gerar o array com os termos de Fibonacci
  var fibonacciArray = gerarArrayFibonacci(numeroDeTermos);

  // Exibe os termos de Fibonacci e o array gerado
  console.log("Os primeiros " + numeroDeTermos + " termos de Fibonacci são:");
  for (var i = 0; i < numeroDeTermos; i++) {
    console.log(calcularFibonacci(i));
  }

  console.log("\nArray gerado com os termos de Fibonacci:");
  console.log(fibonacciArray);
}
