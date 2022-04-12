const salaPython = ['Melissa', 'Helena', 'Rodrigo'];

const salaJavaScript = ['Juliana', 'Leo', 'Raquel'];

//o concat não altera os Arrays originais; portanto, foi preciso salvá-lo em uma nova const
const salasConcatenadas = salaPython.concat(salaJavaScript);

console.log(String(salasConcatenadas));