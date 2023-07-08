// const auto = {
//     marca: "Honda",
//     modelo: "Civic",
//     color: "Negro",
//     anio: 2024
// };

// auto.anio = 2025;
// console.log(auto);
// console.log(auto.modelo);

// const keys = Object.keys(auto);

// console.log(keys);

// const pairs = [] 

// for (let i = 0; i < keys.length; i++) {
//     pairs
// }

// const colors = ["Pink", "Red", "Black"];
// const newColors = [...colors];

// console.log(newColors);

// const book = {
//     author: "Marjin Haverbeke",
//     title: "Eloquent JS",
//     year: 2018
// };

// const newBook = {...book};
// console.log(newBook);

// const colors = ["red", "green", "pink"];

// const [red, green, pink] = colors;

// console.log(pink);

// const numbers = [1, 3, 4, 7, 2, 1, 9, 0]

// const doubled = [];

// for (let number of numbers) {
//     doubled.push(number * 2);
// }

// console.log(doubled);

const person = {
  firstName: "John",
  lastName: "Doe",
  links: {
    web: {
      blog: "https://johndoe.com",
    },
    social: {
      facebook: "https://facebook.com/john.doe",
      instagram: "https://instagram.com/john.doe",
    },
  },
};

const person2 = {...person, inde: 5};
console.log(person2);

const {links: {social: {facebook: fb, instagram: ig}}} = person;

console.log("Facebook: " + fb + "\nInstagram: " + ig);