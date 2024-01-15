function calculadora(numero1, numero2, operacao) {
  // Verifica se os parâmetros são números
  if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
    throw new Error('Os dois primeiros parâmetros devem ser números.');
  }

  // Verifica se a operação é uma string
  if (typeof operacao !== 'string') {
    throw new Error('O terceiro parâmetro deve ser uma string que representa a operação (adição, subtração, multiplicação ou divisão).');
  }

  let resultado;

  switch (operacao.toLowerCase()) {
    case 'adição':
    case 'soma':
      resultado = numero1 + numero2;
      break;
    case 'subtração':
      resultado = numero1 - numero2;
      break;
    case 'multiplicação':
      resultado = numero1 * numero2;
      break;
    case 'divisão':
      // Verifica se há uma tentativa de divisão por zero
      if (numero2 === 0) {
        throw new Error('Não é possível dividir por zero.');
      }
      resultado = numero1 / numero2;
      break;
    default:
      // Se a operação não for reconhecida
      throw new Error('Operação inválida. Escolha entre adição, subtração, multiplicação ou divisão.');
  }

  return resultado;
}

// Exemplos de uso:
try {
  const soma = calculadora(5, 3, 'soma');
  console.log('Soma:', soma);

  const multiplicacao = calculadora(4, 6, 'multiplicação');
  console.log('Multiplicação:', multiplicacao);

  const divisao = calculadora(8, 2, 'divisão');
  console.log('Divisão:', divisao);

  // Exemplo de erro: tentativa de divisão por zero
  // const resultadoInvalido = calculadora(10, 0, 'divisão');
  // console.log(resultadoInvalido);
} catch (erro) {
  console.error('Erro:', erro.message);
}
