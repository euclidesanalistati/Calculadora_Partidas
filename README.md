# 🧮 Calculadora de Ranqueadas

Este projeto é uma simples **calculadora de partidas ranqueadas** feita em JavaScript. O objetivo é determinar o nível de um herói com base na diferença entre vitórias e derrotas.

---

## 📌 Lógica do Projeto

A função `resultadoRanqueada()` recebe dois parâmetros:

- **Vitórias**
- **Derrotas**

Com base nisso, calcula o **saldo de vitórias** e classifica o jogador em um dos seguintes níveis:

| Saldo de Vitórias | Nível      |
|-------------------|------------|
| 0 a 10            | 🪨 Ferro     |
| 11 a 20           | 🥉 Bronze    |
| 21 a 50           | 🥈 Prata     |
| 51 a 80           | 🥇 Ouro      |
| 81 a 90           | 💎 Diamante  |
| 91 a 100          | 🔥 Lendário  |
| Acima de 100      | 🧠 Imortal   |

---

## 🧠 Exemplo de Código

```javascript
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

