const lista1 = [12, 26, 41, 26, 19];
const lista2 = [94, 25, 6, 12, 17];

const listaTotal = lista1.concat(lista2);
/*console.log(listaTotal);*/

var listaPar = listaTotal.filter(numero => numero % 2 === 0);
/*console.log(listaPar);*/

var somaListaPar = listaPar.reduce((acumulador, atual) => acumulador + atual, 0);
/*console.log(somaListaPar);*/

var numerosParesEmLetraMaiuscula = listaPar.map(numero => numero.toString().toUpperCase());
/*console.log(numerosParesEmLetraMaiuscula);*/

var verificandoNumero4 = listaTotal.includes(4);
/*console.log(verificandoNumero4);*/

var retiradaPrimeiroTermo = listaPar.splice(0, 1);
console.log(retiradaPrimeiroTermo);

