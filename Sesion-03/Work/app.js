// const colores = ["Red", "Green", "Blue"];
// colores.push("pink");

// console.log(colores);

// const numbers = [2, 4 , 5 , 10];
// const double = [];

// for (let i = 0; i < numbers.length; i++) {
//     double.push(numbers[i] * 2);
// }

// console.log(double);

// Promedio de los números
const numbers = [5, 3, 4, 7, 2, 1, 9, 7, 7];
console.log(numbers.length);

let suma = 0;
for (let i = 0; i < numbers.length; i++) {
    suma = numbers[i] + suma;
}

console.log("El promedio de los numeros es: " + suma / numbers.length);