// EX: MODIFICANDO ARRAY

const listaChamada = ["Carla", "Neri", "Marcela", "Dourado", "Pedro", "Carol"];

console.log(listaChamada);

listaChamada.splice(2, 3, "José");

console.log(listaChamada);

listaChamada.push("Severino");
listaChamada.unshift("Guilherme");
console.log(listaChamada);

listaChamada.splice(1, 0, "Pedrinho");
console.log(listaChamada);


// EX: ANIMAIS MARINHOS

animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario)