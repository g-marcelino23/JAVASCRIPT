function encontrarMaiorValor(array) {
  
  if (array.length === 0) {
    return undefined; 
  }


  const maiorValor = array.reduce(function (valorAnterior, valorAtual) {
    
    return valorAnterior > valorAtual ? valorAnterior : valorAtual;
  });

  return maiorValor; 
}


const numeros = [4, 12, 7, 2, 9, 15, 3, 234];
const resultado = encontrarMaiorValor(numeros);

console.log("O maior valor no array é:", resultado);
