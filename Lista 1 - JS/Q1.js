/* Faça um programa usando a linguagem JavaScript que verifique
 o tipo de dado de uma variavel */

const prompt = require('prompt-sync')();
const minhaVariavel = prompt('Digite qualquer coisa:');
const tipoDeDado = typeof minhaVariavel;
console.log('O tipo de dado é: ' + tipoDeDado);
