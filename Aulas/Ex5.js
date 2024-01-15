/* Faça um programa usando a linguagem JavaScript que cria
uma função que receba dois valores e diga qual os valores
pares entre esses dois números*/

function valores_pares(inic, fim) {
  for (var i = inic; i <= fim; i++) {
  if (i % 2 == 0) {
  console.log('Par: ' + i);
  }
  }
 };
 valores_pares(1, 10);
