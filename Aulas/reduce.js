const valores = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const resultado = valores.reduce((acc, atual) => {
  if(acc < atual){
    acc = atual;
  }
  return acc
}, 0);

console.log(resultado);