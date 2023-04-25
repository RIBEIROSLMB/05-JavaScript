// EX: DIVIDIR OS ALUNOS DE UMA SALA EM DUAS TURMAS

const nomes = ["Marcelo", "Pedro", "Maria", "Juliana", "Sintia", "Robert", "Guilherme", "Josué", "Sinara", "Marcelina", "Julia", "Sidnei"];

console.log(`O tamanho do array é de: ${nomes.length}`);

const turma1 = nomes.slice(0, nomes.length / 2);
const turma2 = nomes.slice(nomes.length / 2);

console.log(`Os alunos da turma 1 são: ${turma1}`);
console.log(`Os alunos da turma 2 são: ${turma2}`);

// JUNTANDO AS SALAS NOVAMENTE

const salaUnificada = turma2.concat(turma1);
console.log(`A turma unificada: ${salaUnificada}`);