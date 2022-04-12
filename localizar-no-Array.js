const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const mediasAlunos = [10, 7, 8, 9];

let listaDeNotasEAlunos = [alunos, mediasAlunos];

const exibeNomeENota = (nomeDoAluno) => {

    if(listaDeNotasEAlunos[0].includes(nomeDoAluno)) {

        indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);

        return listaDeNotasEAlunos[0][indice] + ', sua média é ' + listaDeNotasEAlunos[1][indice]

    } else {

        return "A(O) aluna(o) não foi encontrada(o)"
        
    }
}

console.log(exibeNomeENota("Ana"));
console.log(exibeNomeENota("Caio"));
console.log(exibeNomeENota("Roberta"));