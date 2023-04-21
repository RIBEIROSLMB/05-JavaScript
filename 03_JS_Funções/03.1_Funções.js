// DECLARAÇÃO DE FUNÇÃO

// 1) Declara a função

function imprimirTexto(texto)
{
    console.log(texto);
}

// 2) Chama e executa a função

imprimirTexto("Guilherme Augusto Ribeiro");

// EXEMPLOS COM NÚMEROS:

// DEFINIÇÃO DE FUNÇÃO
function somarValores(x,y)
{
    return x + y; // tem que apresentar o RETURN
}

imprimirTexto(somarValores(5, 15));

// EXPRESSÃO DE FUNÇÃO
const somax = function (x1, y1) { return x1 + y1 };
console.log(somax(4, 8));

// ARROW FUNCTION
const somarArrow = (x2, y2) => x2 + y2;
console.log(somarArrow(15, 18));

// EXEMPLOS COM TEXTOS
function comprimentarPessoas(nome)
{
    console.log(`Olá ${nome}, seja muito bem vinda!`);
}

comprimentarPessoas("Marcela");