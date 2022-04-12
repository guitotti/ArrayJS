const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']

                                    //10 - mas não inclui o índice 10; portanto, 0 ao 9
const sala1 = nomes.slice(0, nomes.length/2);
console.log(`Alunos da sala 1: ${String(sala1)}`);

                                // começa a partir do índice 10 vai até o final 
const sala2 = nomes.slice(nomes.length/2);
console.log(`Alunos da sala 2: ${String(sala2)}`);

