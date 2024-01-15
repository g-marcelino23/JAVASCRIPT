function verificarTriangulo(a, b, c) {
  if (a < b + c && b < a + c && c < a + b) {
    return "Os valores formam um triângulo.";
  } else {
    return "Os valores não formam um triângulo.";
  }
}

var ladoA = parseFloat(prompt("Digite o valor do lado A:"));
var ladoB = parseFloat(prompt("Digite o valor do lado B:"));
var ladoC = parseFloat(prompt("Digite o valor do lado C:"));

var resultado = verificarTriangulo(ladoA, ladoB, ladoC);
console.log(resultado);
