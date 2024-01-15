
class Funcionario {
 
  constructor(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
  }

  aumentarSalario() {
    this.salario *= 1.1;
  }
}

const joao = new Funcionario('João Silva', 'Desenvolvedor', 5000);

console.log('Detalhes antes do aumento de salário:');
console.log('Nome:', joao.nome);
console.log('Cargo:', joao.cargo);
console.log('Salário:', joao.salario);

joao.aumentarSalario();

console.log('\nDetalhes após o aumento de salário:');
console.log('Nome:', joao.nome);
console.log('Cargo:', joao.cargo);
console.log('Novo Salário:', joao.salario);
