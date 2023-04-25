// Suponha que temos uma lista de compras com diversos itens e preços, e queremos realizar algumas operações utilizando as funções de array do JavaScript. Primeiro, vamos criar nossa lista de compras:

// LISTA DE COMPRAS:

const listaCompras =
[
    { item: 'Leite', preco: 2.5 },
    { item: 'Arroz', preco: 5.0 },
    { item: 'Feijão', preco: 3.0 },
    { item: 'Macarrão', preco: 2.0 },
    { item: 'Batata', preco: 1.5 },
    { item: 'Tomate', preco: 2.0 },
    { item: 'Cebola', preco: 1.0 },
    { item: 'Alho', preco: 0.5 },
];

// 1 - Filtrar todos os itens que custam mais de R$ 2,50:
 /*
var itensMaisValor = listaCompras.filter(valor => valor.preco > 2.5);
console.log(itensMaisValor);
*/

// 2 - Somar o total dos preços de todos os itens da lista:
/*
var soma = listaCompras.reduce((acumulador, item) => acumulador + item.preco, 0);
console.log(soma);
*/

// 3 - Criar uma nova lista com apenas os nomes dos itens em letra maiúscula:
/*
var letraMaiuscula = listaCompras.map(item => item.item.toUpperCase());
console.log(letraMaiuscula);
*/

// 4 - Verificar se a lista contém o item 'Leite':
/*
var verificaLeite = listaCompras.some(item => item.item === "Leite");
console.log(verificaLeite); 
*/

// 5 - Remover o item 'Alho' da lista:
/*
var indiceAlho = listaCompras.findIndex(item => item.item === "Alho");
listaCompras.splice(indiceAlho, 1);
console.log(listaCompras);
*/

// 6 - Criar uma nova lista com itens adicionais e concatenar com a lista atual:
/*
const itensAdicionais =
[
    { item: 'Pão', preco: 2.0 },
    { item: 'Café', preco: 4.0 },
    { item: 'Açúcar', preco: 1.0 },
];

var listaTotal = listaCompras.concat(itensAdicionais);
console.log(listaTotal);
*/