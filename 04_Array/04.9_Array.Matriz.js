// MOSTRAR LISTA DE NOMES E MÉDIAS

const nomes = ["Guilherme", "João", "Pedro", "Sinara"];

const medias = [9, 8, 7, 8.5];

const nomesMedias = [nomes, medias];


function mostrarNomesMedias()
{
    for (var j = 0; j < nomes.length; j++)
    {
        console.log(`O aluno: ${nomesMedias[0][j]} tem média ${nomesMedias[1][j]}`);
    }
}

mostrarNomesMedias()

