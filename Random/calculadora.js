// Funções para as operações
function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  if (b === 0) {
    return "Erro! Divisão por zero.";
  }
  return a / b;
}

// Função principal da calculadora
function calcularOperacao(operacao, a, b) {
  switch (operacao) {
    case 1:
      return soma(a, b);
    case 2:
      return subtracao(a, b);
    case 3:
      return multiplicacao(a, b);
    case 4:
      return divisao(a, b);
    default:
      return "Opção inválida";
  }
}

// Solicitação do usuário para escolher a operação
var escolha = parseInt(prompt("Escolha uma operação:\n1. Soma\n2. Subtração\n3. Multiplicação\n4. Divisão"));

// Verifica se a escolha é válida
if (isNaN(escolha) || escolha < 1 || escolha > 4) {
  console.log("Escolha inválida. Por favor, escolha uma opção de 1 a 4.");
} else {
  // Solicitação do usuário para inserir dois valores
  var valor1 = parseFloat(prompt("Digite o primeiro valor:"));
  var valor2 = parseFloat(prompt("Digite o segundo valor:"));

  // Realiza a operação escolhida e exibe o resultado
  var resultado = calcularOperacao(escolha, valor1, valor2);
  console.log("Resultado da operação: " + resultado);
}
