const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

let palavra = "Exemplo de TEXTO";

let tudoMaiusculo = palavra.toUpperCase(); // EXEMPLO DE TEXTO
let tudoMinusculo = palavra.toLowerCase(); // exemplo de texto

console.log(tudoMaiusculo);
console.log(tudoMinusculo);


const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres


let nome = "João";
let sobrenome = "Silva";
let nomeCompleto = nome + " " + sobrenome;

const minhaVar = 1;
const MinhaVar = "texto";
const minhavar = "3";
const MINHAVAR = 2;

console.log(minhaVar, MinhaVar, minhavar, MINHAVAR)

let input1 = null;
let input2;

console.log(input1); // null
console.log(input2); // undefined