var fistName = "João";
var lastName = "Pedro";

console.log(fistName, lastName); // JOÃO PEDRO

if (fistName === "João")
{
    var fistName = "Marcelo";
    let lastName = "Souza";
    console.log(fistName, lastName); // MARCELO SOUZA
}

console.log(fistName, lastName); // MARCELO PEDRO
