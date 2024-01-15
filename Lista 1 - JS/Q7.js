// Função para inverter uma string
function inverterString(str) {
  // Converte a string para um array de caracteres, inverte o array e depois junta os caracteres novamente
  return str.split('').reverse().join('');
}

// Exemplo de uso
var stringOriginal = "Olá, mundo!";
var stringInvertida = inverterString(stringOriginal);

console.log("String Original: " + stringOriginal);
console.log("String Invertida: " + stringInvertida);
