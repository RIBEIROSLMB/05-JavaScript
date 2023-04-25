// EX 1:

/*
const nomes = ["Marcelo", "Joice", "Otavio", "Duda"];
const notas = [6.5, 4.5, 9, 7.5];

var reprovados = nomes.filter((nome, indice) => notas[indice] < 5)

console.log(`Os alunos reprovados: ${reprovados}`);



// EX 2:

const numeros = [1, 2, 3, 4, 5, 6];

const numerosPares = numeros.filter(numero => numero % 2 === 0);

console.log(numerosPares); // [2, 4, 6]



// EX 3: Dado um array de números, crie um novo array que contém apenas os números pares:  

const numeros = [25, 12, 11, 24, 36, 19, 28, 47, 10];

const numerosPares = numeros.filter(numero => numero % 2 === 0);

console.log(`Os numeros pares são: ${numerosPares}`);



// EX 4: Dado um array de números, calcule a média aritmética:

const numeros = [10, 8, 6, 7, 9, 5];

var soma = numeros.reduce((acum, atual) => atual + acum, 0);

var mediaArt = soma / numeros.length;

console.log(mediaArt.toFixed(2));



// EX 5: Dado um array de palavras, crie um novo array que contém apenas as palavras com mais de 5 letras

const palavras = ["banana", "laranja", "maçã", "abacaxi", "limão", "uva"];

const palavrasMaisCinco = palavras.filter(palavra => palavra.length > 5);

console.log(palavrasMaisCinco);



// EX 6: Dado um array de números, calcule a soma dos números que são múltiplos de 3 e 5

const numeros = [1, 22, 30, 4, 15, 6, 7, 8, 90, 10];

const numerosMultiplosTresCinco = numeros.filter(numero => (numero % 3 === 0) && (numero % 5 === 0));
const somaDoResultado = numerosMultiplosTresCinco.reduce((acum, atual) => acum + atual, 0);

console.log(numerosMultiplosTresCinco);
console.log(somaDoResultado);

*/


// EX 7: Dado um array de objetos, crie um novo array que contém apenas os objetos que possuem uma propriedade específica:

const pessoas =
[
    { nome: "Maria", idade: 25 },
    { nome: "João", idade: 22 },
    { nome: "Marcelo", idade: 44 },
    { nome: "Pedro", idade: 52 }
];

const pessoasIdade44 = pessoas.filter(pessoa => pessoa.idade === 44);

console.log(pessoasIdade44);
