console.log('-------> Programación funcional <---------');

const numbers = [1, 2, 3, 4, 5];

const numE = numbers.map((number) => number * 2);

console.log(numE);


const numbers2 = [1, 2, 3, 4, 5];

numbers2.map((n) => n * 10).forEach((n) => console.log(n));


const car = {
    brand: 'Honda',
    model: 'Civic',
    year: 2023
};

function addColor(car, c) {
    const carN = Object.assign({}, car, {
        color: c
    });
    return carN;
}


const newCar = addColor(car, 'Pink');

console.log(car);
console.log(newCar);


const arr = [1, 2, 3, 4, 5];

const arr2 = arr.map((x) => x * 2);

console.log(arr2);

arr.filter(x => x % 2 === 0).forEach(x => console.log(x));

var acc = 0

for (const x of arr2) {
    acc += x;
}

console.log(acc);

