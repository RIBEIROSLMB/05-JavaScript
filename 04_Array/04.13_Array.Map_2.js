// EX:01
/*
var nomes = ["Junio firmino", "lucas pereira", "MARCELO timotio"];

var nomesAtualizados = nomes.map(nome => nome.toUpperCase());

console.log(nomesAtualizados);
*/

// EX:02


function nomeMaiusculo(nome)
{
    return nome.toUpperCase();
}

var nomes = ["Junio firmino", "lucas pereira", "MARCELO timotio"];

var nomeAtualizado = nomes.map(nomeMaiusculo);
console.log(nomeAtualizado);

