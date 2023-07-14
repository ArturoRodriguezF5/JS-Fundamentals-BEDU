/**
 * Scoope global, se pueden ocupar en cualquier lugar del código
 */

// const myVar = '5';

// /**
//  * Scoope local, se pueden ocupar solo en la función
//  */

// function foo(a, b) {
//     const saludo = 'Hola';
//     console.log(saludo)
// }

// foo(1, 5);





// function foo() {
//     console.log(`Mi nombre es: ${this.name}`)
// }

// const obj = {
//     name: 'Arthy',
//     fun: foo
// };

// obj.fun();

/**
 * Reto 3: Números faltantes de una serie
 */
const array = [9, 5, 3, 1, 20];

const maxB = Math.max(...array);

const arr2 = [];
const myLambda = (a, arr, arrn) => {
    for (let i = 0; i <= a; i++) {
        if ( ! arr.includes(i)) {
            arrn.push(i);
        }
    }
    return arrn
};

console.log(myLambda(maxB, array, arr2))




