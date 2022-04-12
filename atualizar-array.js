const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']


//splice pode ser utilizado sem o terceiro parâmetro
//também não é necessário retirar um elemento do array
//o método splice altera a Array original

//ordem de parâmetros: a partir de qual índice, quantos serão removidos, e o que será acrescentado 
listaDeChamada.splice(1, 2, 'Rodrigo');

console.log(listaDeChamada.toString());