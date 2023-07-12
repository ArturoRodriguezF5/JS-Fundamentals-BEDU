
// console.log(myFunction(50, 4));



// function myFunction (a, b) {
//     return a + b;
// }

// const myLambda = (a, b) => a * b;

// console.log(myLambda(5, 10));

// console.log(getAge(1994));

// function getAge (birthYear) {
//     const age = 2023 - birthYear;
//     return age;
// }

/**
 * Reto 1: Crear una función que retorne el resultado de un exponente
 */

console.log(functionPow(5, 11));

function functionPow(base, exponente) {
    return "El número: " + base + " a la potencia: " + exponente +  " es: " + Math.pow(base, exponente);
}

// const myLambda = (base, exp) => {
//     return `El numero: ${base} a la ${exp} potencia es: ${Math.pow(base, exp)}`;
// };

// console.log(myLambda(5, 11));

// console.log(funcFact(5));
// function funcFact(n) {
//     if(n === 0) return 1;
//     return n * (funcFact(n - 1));
// };

// (function(nombre) {
//     console.log(`nombre: ${nombre}`)
// })("Arturo")

/**
 * Reto 2: Mayor de dos números
 */
const mayorDeDos = (n1, n2) => n1 < n2 ? n2 : n1;

console.log(`El numero mayor es: ${mayorDeDos(115, 57)}`);

/**
 * Reto 3: fibonacciSequence(limit)
 */

const fibonacciSequence = (limit) => {
    let ant = 0;
    let sig = 1;
    let actual = 0;
    let prin = 0;
    while(prin <= limit) {
        actual += ant;
        ant = actual;
        prin++;
    }
    console.log(actual);
};

fibonacciSequence(4);