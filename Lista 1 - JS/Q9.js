// Função para remover um objeto com base em uma propriedade
function removerElementoPorPropriedade(array, propriedade, valor) {
  return array.filter(function (elemento) {
    return elemento[propriedade] !== valor;
  });
}

// Exemplo de array de objetos
var arrayDeObjetos = [
  { id: 1, nome: "Objeto 1" },
  { id: 2, nome: "Objeto 2" },
  { id: 3, nome: "Objeto 3" }
];

// Propriedade e valor para remover
var propriedadeParaRemover = "id";
var valorParaRemover = 2;

// Remover o objeto com base na propriedade e valor especificados
var novoArray = removerElementoPorPropriedade(arrayDeObjetos, propriedadeParaRemover, valorParaRemover);

// Exibir o novo array após a remoção
console.log(novoArray);
