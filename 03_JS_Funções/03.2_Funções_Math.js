const k1 = 3.75;
const k2 = 2.31;
const k3 = 6.5;
const k4 = 7.49;

function mostrarTexto(texto)
{
    console.log(texto);
}

// ARREDONDAMENTO NORMAL DE REGRA

mostrarTexto(Math.round(k1));
mostrarTexto(Math.round(k2));
mostrarTexto(Math.round(k3));
mostrarTexto(Math.round(k4));


// MOSTRA PROXIMO INTEIRO

mostrarTexto(Math.ceil(k1));
mostrarTexto(Math.ceil(k2));
mostrarTexto(Math.ceil(k3));
mostrarTexto(Math.ceil(k4));


// MOSTRA INTEIRO ANTERIOR

mostrarTexto(Math.floor(k1));
mostrarTexto(Math.floor(k2));
mostrarTexto(Math.floor(k3));
mostrarTexto(Math.floor(k4));


// DESCONSIDERA CASAS DECIMAIS

mostrarTexto(Math.trunc(k1));
mostrarTexto(Math.trunc(k2));
mostrarTexto(Math.trunc(k3));
mostrarTexto(Math.trunc(k4));


// ELEVAR AO QUADRADO

mostrarTexto(Math.pow(k1,1));
mostrarTexto(Math.pow(k2,2));
mostrarTexto(Math.pow(k3,3));
mostrarTexto(Math.pow(k4,0.25));


// TIRAR RAIZ

mostrarTexto(Math.sqrt(k1, 2));
mostrarTexto(Math.sqrt(k2, 3));
mostrarTexto(Math.sqrt(k3, 4));
mostrarTexto(Math.sqrt(k4, 5));


// VALOR MINIMO

mostrarTexto(Math.min(k1, k2, k3, k4));


// VALOR MÁXIMO

mostrarTexto(Math.max(k1, k2, k3, k4));


// VALOR ALEATÓRIO ENTRE 0-1

mostrarTexto(Math.random());
mostrarTexto(Math.random());


// VALOR ALEATÓRIO ENTRE 0 E 10;

mostrarTexto(Math.trunc(Math.random() * 10));
