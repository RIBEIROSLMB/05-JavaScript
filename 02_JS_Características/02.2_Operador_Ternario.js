const idadeMinima = 18;
const idadeCliente = 15;


// FORMA 01:
if (idadeCliente > idadeMinima)
{
    console.log("cerveja");
}
else
{
    console.log("suco");
} 


// FORMA 02:
// O OPERADOR TERNÁRIO É UMA ALTERNATIVA PARA O CÓDIGO ACIMA:

            //CONDIÇÃO                  ?  TRUE     : FALSO
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco");


// EX: 02

var numero = 10;
var resultado = (numero > 5) ? "maior que 5" : "menor ou igual a 5";
console.log(resultado); // "maior que 5"
