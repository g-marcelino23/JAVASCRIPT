// Função para calcular o salário líquido
function calcularSalario(ganhoPorHora, horasTrabalhadasPorMes) {
  // Calcula o salário bruto
  var salarioBruto = ganhoPorHora * horasTrabalhadasPorMes;

  // Calcula os descontos
  var descontoIR = salarioBruto * 0.11;
  var descontoINSS = salarioBruto * 0.08;
  var descontoSindicato = salarioBruto * 0.05;

  // Calcula o salário líquido
  var salarioLiquido = salarioBruto - descontoIR - descontoINSS - descontoSindicato;

  // Retorna um objeto contendo os resultados
  return {
    salarioBruto: salarioBruto.toFixed(2),
    descontoIR: descontoIR.toFixed(2),
    descontoINSS: descontoINSS.toFixed(2),
    descontoSindicato: descontoSindicato.toFixed(2),
    salarioLiquido: salarioLiquido.toFixed(2)
  };
}

// Solicita a entrada do usuário
var ganhoPorHora = parseFloat(prompt("Informe quanto você ganha por hora:"));
var horasTrabalhadasPorMes = parseFloat(prompt("Informe o número de horas trabalhadas por mês:"));

// Chama a função e exibe os resultados
var resultado = calcularSalario(ganhoPorHora, horasTrabalhadasPorMes);

// Exibe os resultados conforme o modelo de saída
console.log("+ Salário Bruto: R$ " + resultado.salarioBruto);
console.log("- IR (11%): R$ " + resultado.descontoIR);
console.log("- INSS (8%): R$ " + resultado.descontoINSS);
console.log("- Sindicato (5%): R$ " + resultado.descontoSindicato);
console.log("= Salário Líquido: R$ " + resultado.salarioLiquido);
