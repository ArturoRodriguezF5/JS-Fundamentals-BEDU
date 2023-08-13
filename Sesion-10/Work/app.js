const frutas = [
    "Sandia",
    "Limon",
    "Pepino",
    "Tuna"
];

const myFunc = (frutas) => {
    return frutas.map(x => {
        return `La: ${x}`;
    });
};

const arrF = myFunc(frutas);

arrF.forEach(x => console.log(x));