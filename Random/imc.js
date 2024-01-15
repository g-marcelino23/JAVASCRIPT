function calcularPesoIdeal(altura, sexo) {
  var pesoIdeal;

  if (sexo.toLowerCase() === "masculino" || sexo.toLowerCase() === "homem") {
    pesoIdeal = (72.7 * altura) - 58;
  } else if (sexo.toLowerCase() === "feminino" || sexo.toLowerCase() === "mulher") {
    pesoIdeal = (62.1 * altura) - 44.7;
  } else {
    return "Sexo não reconhecido. Por favor, informe 'masculino' ou 'feminino'.";
  }

  return "O peso ideal para uma pessoa de " + altura + "m de altura e sexo " + sexo + " é: " + pesoIdeal.toFixed(2) + " kg.";
}

var altura = parseFloat(prompt("Digite a altura em metros:"));
var sexo = prompt("Digite o sexo (masculino/feminino):");

var resultado = calcularPesoIdeal(altura, sexo);
console.log(resultado);
