const notas = [10, 8, 5, 7];

const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota /*INCREMENTA 1 A NOTA*/ );

console.log(notasAtualizadas);

