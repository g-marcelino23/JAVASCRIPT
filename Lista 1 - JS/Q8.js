// Função para verificar se um objeto é vazio
function objetoEhVazio(objeto) {
  // Obtém as chaves do objeto
  var chaves = Object.keys(objeto);

  // Verifica se a quantidade de chaves é zero (objeto vazio)
  return chaves.length === 0;
}

// Exemplos de uso
var objeto1 = {};
var objeto2 = { chave: "valor" };

console.log(objetoEhVazio(objeto1)); // Deve imprimir true
console.log(objetoEhVazio(objeto2)); // Deve imprimir false
