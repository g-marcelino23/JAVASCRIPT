// Função para calcular a diferença entre a soma dos quadrados e o quadrado da soma
function calcularDiferenca() {
  // Calcular a soma dos quadrados
  var somaDosQuadrados = 0;
  for (var i = 1; i <= 10; i++) {
    somaDosQuadrados += i * i;
  }

  // Calcular o quadrado da soma
  var soma = 0;
  for (var j = 1; j <= 10; j++) {
    soma += j;
  }
  var quadradoDaSoma = soma * soma;

  // Calcular a diferença
  var diferenca = quadradoDaSoma - somaDosQuadrados;

  return diferenca;
}

// Chama a função e exibe o resultado
var resultado = calcularDiferenca();
console.log("A diferença é: " + resultado);
