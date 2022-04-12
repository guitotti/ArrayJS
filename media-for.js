const notas = [10, 6.5, 8, 7.5];

//é importante criar essa variável fora do bloco for, para que ela não seja resetada em 0 toda vez que o loop for executado
let somaDasNotas = 0;

for(i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i]
    //na última iteração, somaDasNotas deve atingir o valor de 32
    console.log(somaDasNotas);
}

let media = somaDasNotas/notas.length;
console.log(media);