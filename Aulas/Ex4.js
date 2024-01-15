const prompt = require('prompt-sync')();

let value = Number(prompt('Digite um valor: '));

let signal = (value >= 0) ? `${value} - signal: +` : `${value} - signal: -`

console.log(signal);