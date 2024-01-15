// Função para calcular o número harmônico H(n)
function calcularHarmonico(n) {
  var harmonico = 0;

  for (var i = 1; i <= n; i++) {
    harmonico += 1 / i;
  }

  return harmonico;
}

// Solicita ao usuário que digite um valor para n
var n = parseInt(prompt("Digite um valor inteiro e positivo para n:"));

// Verifica se o valor de n é válido
if (isNaN(n) || n <= 0) {
  console.log("Por favor, digite um valor inteiro e positivo para n.");
} else {
  // Chama a função e exibe o resultado
  var resultado = calcularHarmonico(n);
  console.log("O número harmônico H(" + n + ") é: " + resultado.toFixed(4));
}
