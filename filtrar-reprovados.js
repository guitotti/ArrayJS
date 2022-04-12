const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const notas = [7, 4.5, 8, 7.5];

//o filter precisa que a função callback retorne valor booleano; 

//nesse, caso, se o retorno for true, o aluno será incluído na lista de reprovados, caso contrário (false), não
const reprovados = nomes.filter( (_, indice) => notas[indice] < 5)
                                //_ = informação do elemento
                                //o JS, por padrão, entende o "_" como um parâmetro existente mas não utilizado na função callback

                                //índice (segundo parâmetro) = informação do índice

console.log(`Estudantes reprovados: ${reprovados}`);