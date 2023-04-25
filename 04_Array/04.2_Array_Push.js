const notas = [10, 8, 6];

notas.push(7); // INSERINDO A NOTA 7 NO CONJUNTO DE NOTAS EXISTENTES

// CALCULAR MÉDIA:

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

