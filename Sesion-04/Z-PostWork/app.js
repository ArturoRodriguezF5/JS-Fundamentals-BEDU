const deepEqual = function (a, b) {
    
    if(typeof(a) && typeof(b) === Object && Object.keys(a).length === Object.keys(b).length) {
        for (let i = 0; i < Object.keys(a).length; i++) {

        }
    } else
        return a === b ? true : false;
};

const arianna = {
    name: 'Arianna',
    lastName: 'Rodriguez'
};
const arianna2 = {
    name: 'Arianna',
    lastName: 'Rodriguez'
};

console.log(deepEqual(5, 5));

console.log(Object.keys(arianna));
console.log(Object.values(arianna))
console.log(Object.entries(arianna) === {name: 'Arianna', lastName: 'Rodriguez'})

