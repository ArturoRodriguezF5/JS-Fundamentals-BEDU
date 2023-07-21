const numbers = [1, 2, 3, 4, 5]

const numsE = numbers.map((number) => number *2);

console.log(numsE);


const car = {
    brand: 'Nissan',
    model: 'Sentra',
    year: 2023
};

function addColor(car) {
    const newCar = Object.assign({}, car, {
        color: 'Pink',
        standart: false
    });
    return newCar;
}

const sameCar = addColor(car);

console.log(`Before calling addColor()`, car);
console.log(`After Calling addColor()`, sameCar);
console.log(`Same car? ${car === sameCar}`);