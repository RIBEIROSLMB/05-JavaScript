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