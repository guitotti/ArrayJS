const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

//callback - uma função que chama de volta outra função

//callback com arroy function
notas.forEach( nota => {
    somaDasNotas += nota
})

//callback com expressão de função
/*
notas.forEach(somarNotas);

function somarNotas(nota) {
    somaDasNotas += nota
}
*/

let media = somaDasNotas/notas.length
console.log(media);