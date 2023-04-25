// EX 1:


const salaMatematica = [4.5, 8, 7.6, 9.4, 8.6, 3.5];
const salaPortugues = [8.5, 7, 5.5, 9.4, 6.6, 10];
const salaPyton = [7.5, 8, 7.9, 1.4, 6.6, 3.2];

function mediaDaSala(sala)
{
    const somaNotasSala = sala.reduce((acum, atual) => atual + acum, 0 )
    return (somaNotasSala / sala.length).toFixed(2);
}

console.log(`A média da sala de Matemática é: ${mediaDaSala(salaMatematica)}`);
console.log(`A média da sala de Portugês é: ${mediaDaSala(salaPortugues)}`);
console.log(`A média da sala de Pyton é: ${mediaDaSala(salaPyton)}`);


// EX 2:

const valores = [2.5, 6.7, 8.4, 5.1, 9.3];

const produtos = ["Beterraba", "Goiabada", "Manjericão", "Controle", "Pilha"];

function mediaValores()
{
    var mediaValores = valores.reduce((acum, atual) => atual + acum, 0) / valores.length;
    return mediaValores.toFixed(2);
}

console.log(mediaValores());
