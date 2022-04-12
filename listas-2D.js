const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const mediasAlunos = [10, 7, 8, 9];

//lista de duas dimensões, também conhecida como matriz
let listaDeNotasEAlunos = [alunos, mediasAlunos];

console.log(`${listaDeNotasEAlunos[0][0]}, 
            sua média é ${listaDeNotasEAlunos[1][0]}`);