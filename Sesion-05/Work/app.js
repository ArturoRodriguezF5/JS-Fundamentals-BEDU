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
 * Reto 1: Mediante un identificador, buscar elementos en la la lista
 */

const singers = [
    { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
    { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
    { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
    { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
];

function pluck(list, propertyName) {
    const arr = [];
    if(propertyName === 'name') {
        for (const name of list) {
            arr.push(name.name);
        }
    } else if(propertyName === 'band') {
        for (const band of list) {
            arr.push(band.band);
        }
    } else if(propertyName === 'born') {
        for (const born of list) {
            arr.push(born.born);
        }
    }

    return arr
}

console.log( pluck(singers, 'name') );
// ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]

console.log( pluck(singers, 'band') );
// ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]

console.log( pluck(singers, 'born') );
// [1948, 1950, 1967, 1964]
/**
 * Reto 2: 
 */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const createPhoneNumber = numbers => {
    const cad = [];
    for(let i = 0; i < numbers.length; i++) {
        if(i === 0) {
            cad.push('(' + numbers[i]);
        } else if (i === 2) {
            cad.push(numbers[i] + ') ');
        } else if(i === 5) {
            cad.push(numbers[i] + '-');
        } else {
            cad.push(numbers[i]);
        }
        
    }
    const cadToString = cad.toString();
    const cadFinal = cadToString.replace(/(,)/gm, '');
    return cadFinal;
};

console.log(`Phone Number: ${createPhoneNumber(numbers)}`);
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

console.log(`Numeros que no aparecen en la serie: ${myLambda(maxB, array, arr2)}`)




