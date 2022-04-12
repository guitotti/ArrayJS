const arrayNums = [1, 2, 3, 4]

//função callback / através de função externa
function multiplicaPorDez(num) {
    return num * 10
}

const arraySomada = arrayNums.map(multiplicaPorDez)
console.log(arraySomada)


//função callback / através de arrow function
const arraySomada2 = arrayNums.map(num => num * 10)
console.log(arraySomada)

//o parâmetro "num" recebe cada um dos elementos do array percorridos pelo map