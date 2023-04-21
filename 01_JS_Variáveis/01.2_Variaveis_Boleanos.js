const num1 = 15;

const num2 = 16;

let nome = "Guilherme";

console.log(num1 === num2);

let minhavar;
let minhavar2 = null;

console.log(minhavar);
console.log(minhavar2);

console.log(typeof num1);
console.log(typeof num2);
console.log(typeof nome);
console.log(typeof minhavar);
console.log(typeof minhavar2);


const num3 = 152;
const stringnum = "152";

console.log(num3 + stringnum); // vai cocatenar

console.log(num3 + Number(stringnum)); // vai converter e depois realizar a soma

let telefone1 = 12341234;
console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

let telefone = 12341234;
console.log("O telefone é " + telefone.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

let largura = "10";
let altura = "5";
console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis
