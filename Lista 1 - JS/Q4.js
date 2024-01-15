/* Fa¸ca um programa usando a linguagem JavaScript que crie uma fun¸c˜ao que soma dois n´umeros passados
como argumentos. Verifique se as entradas s˜ao v´alidas */

function somarNumeros(numero1, numero2) {
  
  if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
    console.log("Insira dois números validos!");I
    return;
  }

  const resultado = numero1 + numero2;

  console.log("A soma de " + numero1 + " e " + numero2 + " é: " + resultado);
}

somarNumeros(47, 78);
