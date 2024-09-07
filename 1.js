// 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

const prompt = require('prompt-sync')();

function Fibonacci(n) {
  let a = 0, b = 1;

  if (n === 0 || n === 1) {
    return true;
  }

  while (b < n) {
    let temp = a + b;
    a = b;
    b = temp;
  }

  return b === n;
}

const numero = parseInt(prompt("Informe um número: "));

if (Fibonacci(numero)) {
  console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`O número ${numero} NÃO pertence à sequência de Fibonacci.`);
}