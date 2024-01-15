// Função para calcular o fatorial de um número
function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFatorial(numero - 1);
  }
}

// Solicita ao usuário que digite um valor
var valor = parseInt(prompt("Digite um número para calcular o fatorial:"));

// Verifica se o valor é um número válido
if (isNaN(valor) || valor < 0) {
  console.log("Por favor, digite um número inteiro não negativo.");
} else {
  // Chama a função e exibe o resultado
  var fatorial = calcularFatorial(valor);
  console.log("O fatorial de " + valor + " é: " + fatorial);
}
