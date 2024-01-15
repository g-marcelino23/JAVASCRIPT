// Função para calcular a média aritmética
function calcularMediaAritmetica(valores) {
  var soma = 0;

  // Soma os valores digitados
  for (var i = 0; i < valores.length; i++) {
    soma += parseFloat(valores[i]);
  }

  // Calcula a média
  var media = soma / valores.length;

  return media;
}

// Solicita ao usuário que digite 10 valores
var valores = [];
for (var i = 1; i <= 10; i++) {
  var valor = prompt("Digite o valor #" + i + ":");
  valores.push(valor);
}

// Chama a função e exibe o resultado
var media = calcularMediaAritmetica(valores);
console.log("A média aritmética dos valores digitados é: " + media.toFixed(2));
