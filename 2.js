// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

const prompt = require('prompt-sync')();

function contarLetraA(str) {
  const strLower = str.toLowerCase();
  let contador = 0;

  for (let char of strLower) {
    if (char === 'a') {
      contador++;
    }
  }

  return contador;
}

const input = prompt("Informe uma string para verificar a ocorrência da letra 'a': ");

const quantidade = contarLetraA(input);
console.log(`A letra 'a' (ou 'A') aparece ${quantidade} vez(es) na string.`);
