// VERIFICAR SE O NOME ESTA NA LISTA E MOSTRAR SUA NOTA, CASO CONTRARIO MOSTRAR AVISO

const nomes = ["Guilherme", "João", "Robertinha", "Pedro", "Sinara"];

const medias = [9, 8, 7, 6.5, 8.5];

var listaNomesMedias = [nomes, medias];

function exibirNota(nomeDoAluno)
{
    if (listaNomesMedias[0].includes(nomeDoAluno))
    {
        let indice = listaNomesMedias[0].indexOf(nomeDoAluno);
    
        return listaNomesMedias[0][indice] + ", sua média é: " + listaNomesMedias[1][indice];
    
    }
    else
    {
        return "O aluno não está cadastrado ou não pertence a lista"
    }
}

console.log(exibirNota("Guilherme"));
console.log(exibirNota("Marcelo"));
console.log(exibirNota("Sinara"));
console.log(exibirNota("Ana"));


