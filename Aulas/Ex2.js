const prompt = require('prompt-sync')();

const input = prompt('Digite um número ou vários números separados por espaços: ');
const numbers = input.split(' ');

for (const number of numbers) {
  const num = parseInt(number);
  if (!isNaN(num)) {
    if (num % 2 === 0) {
      console.log(`${num} is even`);
    } else {
      console.log(`${num} is odd`);
    }
  } else {
    console.log(`"${number}" não é um número válido.`);
  }
}
