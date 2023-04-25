const notas = [10, 8, 6, 7, 10]

notas.pop() // TIRA SEMPRE O ULTIMO ELEMENTO

var soma = 0;

function calcularMedia()
{
    for (var i = 0; i < notas.length; i++)
    {
        soma = soma + notas[i];
    }
    
    var media = soma / notas.length
    return media
}

var mediaFinal = calcularMedia();

console.log(mediaFinal);