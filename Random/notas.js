// Função para calcular a média e verificar a situação do aluno
function verificarSituacao(notas) {
  var media = (notas[0] + notas[1]) / 2;

  // Verifica a situação do aluno
  if (media >= 7.0) {
    return "Aprovado";
  } else if (media > 4.0) {
    var notaFinal = parseFloat(prompt("Digite a nota da prova final:"));
    var novaMedia = (media + notaFinal) / 2;

    // Verifica a situação na final
    if (novaMedia >= 5.0) {
      return "Aprovado na Final";
    } else {
      return "Reprovado na Final";
    }
  } else {
    return "Reprovado";
  }
}

// Solicita a entrada do usuário
var nota1 = parseFloat(prompt("Digite a primeira nota:"));
var nota2 = parseFloat(prompt("Digite a segunda nota:"));

// Chama a função e exibe a situação do aluno
var situacao = verificarSituacao([nota1, nota2]);
console.log("Situação do aluno: " + situacao);
