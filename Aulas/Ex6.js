/* Crie uma função chamada calculadora que recebe dois
números e uma operação como parâmetros. A função deve
realizar a operação matemática correspondente (adição,
subtração, multiplicação ou divisão) e retornar o resultado. No
entanto, o código deve ser robusto o suficiente para tratar
possíveis erros, como divisão por zero ou operação inválida.*/

function calculadora(num1, num2, operacao) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      return "Por favor, forneça números válidos.";
  }

  switch (operacao) {
      case 'adição':
          return num1 + num2;
      case 'subtração':
          return num1 - num2;
      case 'multiplicação':
          return num1 * num2;
      case 'divisão':
          if (num2 === 0) {
              return "Não é possível dividir por zero.";
          }
          return num1 / num2;
      default:
          return "Operação inválida. Use 'adição', 'subtração', 'multiplicação' ou 'divisão'.";
  }
}


console.log(calculadora(5, 3, 'adição'));        
console.log(calculadora(10, 2, 'subtração'));    
console.log(calculadora(4, 7, 'multiplicação')); 
console.log(calculadora(8, 0, 'divisão'));       
console.log(calculadora(6, 2, 'potenciação'));   
console.log(calculadora('a', 2, 'adição'));      
