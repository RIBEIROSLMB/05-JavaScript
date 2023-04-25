// CALCULAR A MÉDIA DOS BIMESTRES COM NOTAS: 10, 6.5, 8, 5.5;



const notas = [10, 6.5, 8, 7.5];
var soma = 0;

for (var i = 0; i < notas.length; i++)
{
    soma = soma + notas[i];
}

var media = soma / notas.length;

console.log(media);