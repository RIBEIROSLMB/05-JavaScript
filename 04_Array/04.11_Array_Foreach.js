const notas = [9, 8, 7, 6.5, 8.5];

var somaDasNotas = 0;

notas.forEach(nota => { somaDasNotas += nota
});

var media = somaDasNotas / notas.length;

console.log(media);


// FORMA GERAL

array.forEach(function(valorAtual, índice, array) {
// código a ser executado para cada elemento do array
});

// O PARâMETRO É UMA FUNÇAÕ
