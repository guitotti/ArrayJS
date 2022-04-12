const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

//método reduce() para “reduzir” uma lista de números para um único valor
function mediaSala(notasDaSala) {                   //atual = valor atual do loop
    const somaDasNotas = notasDaSala.reduce( (acumulador, atual) => 
        atual + acumulador, 0 )
        //o método reduce aqui está trabalhando com dois parâmetros: a callback e o valor inicial
                          //valor inicial = 0

        return somaDasNotas / notasDaSala.length
        
}
//A função callback foi escrita na forma de arrow function; 
//nesse caso, quando só temos uma linha de instrução dentro da função (atual + acum) 
//não precisamos usar chaves e nem da palavra-chave return.

//OBSERVAÇÃO:
//O reduce() roda o loop no array “por baixo dos panos”, executando para cada elemento a instrução passada na função callback


console.log(`Média da sala de JavaScript ${mediaSala(salaJS)}`);
console.log(`Média da sala de Java ${mediaSala(salaJava)}`);
console.log(`Média da sala de Python ${mediaSala(salaPython)}`);


//EXEMPLO 2:

const notas = [10, 7.5, 8, 6.5];

const media = notas.reduce((acumulador, atual) => atual + acumulador, 0) / notas.length;
console.log(media);
