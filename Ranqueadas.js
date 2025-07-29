function resultadoRanqueada(quantidadeVitorias, quantidadeDerrotas) {
    let saldoVitorias = quantidadeVitorias - quantidadeDerrotas;
    let nivel;

    if (quantidadeVitorias <= 10) {
        nivel = 'Ferro';
    } else if (quantidadeVitorias > 10 && quantidadeVitorias <= 20) {
        nivel = 'Bronze';
    } else if (quantidadeVitorias > 20 && quantidadeVitorias <= 50) {
        nivel = 'Prata';
    } else if (quantidadeVitorias > 50 && quantidadeVitorias <= 80) {
        nivel = 'Ouro';
    } else if (quantidadeVitorias > 80 && quantidadeVitorias <= 90) {
        nivel = 'Diamante';
    } else if (quantidadeVitorias > 90 && quantidadeVitorias <= 100) {
        nivel = 'Lendário';
    } else if (quantidadeVitorias > 100) {
        nivel = 'Imortal';
    }

    console.log(`O herói ganhou ${saldoVitorias} e está no nível de ${nivel}`);
}

// Coletar dados com prompt
let quantidadeVitorias = parseInt(prompt('Quantas vitórias: '));
let quantidadeDerrotas = parseInt(prompt('Quantas derrotas: '));

// Chamar a função com os dois valores
resultadoRanqueada(quantidadeVitorias, quantidadeDerrotas);
