const estoque = {
  produtos: [
      {
          nome: "Produto A",
          preco: 10.00,
          quantidade: 15
      },
      {
          nome: "Produto B",
          preco: 20.00,
          quantidade: 5
      },
      {
          nome: "Produto C",
          preco: 30.00,
          quantidade: 10
      }
  ],

  verificarEstoque: function(nomeProduto) {
      for (const produto of this.produtos) {
          if (produto.nome === nomeProduto) {
              if (produto.quantidade > 0) {
                  return `O produto ${produto.nome} está disponível em estoque com ${produto.quantidade} unidades.`;
              } else {
                  return `O produto ${produto.nome} está fora de estoque.`;
              }
          }
      }
      return `Produto ${nomeProduto} não encontrado no estoque.`;
  }
};

console.log(estoque.verificarEstoque("Produto B"));
console.log(estoque.verificarEstoque("Produto A"));


