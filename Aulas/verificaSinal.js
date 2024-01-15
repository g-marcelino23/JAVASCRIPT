function verificarSinal(valor) {
    if (valor > 0) {
        return "sinal +";
    } else if (valor < 0) {
        return "sinal -";
    } else {
        return "sinal neutro (zero)";
    }
}

// Exemplo de vetor de valores
const valores = [4, -5, -3, 6, 0];

for (let i = 0; i < valores.length; i++) {
    const sinal = verificarSinal(valores[i]);
    console.log(valores[i] + ": " + sinal);
}
