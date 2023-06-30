let email = "hola";

console.log(email);

email = "ey";

console.log(email);

console.log(typeof email);

/*Ternary oprator*/
const sig = 5;
const op =
  sig < 2
    ? console.log("sig es menor a 2")
    : console.log("sig no es menor a 2");

console.log(sig);
email = "5";
let cast = Number(email);
console.log(typeof cast + " " + cast);

var a = 5;
var b = 10;
var c = 15;

let res = (((3 + b) * c) / a) * 2;
console.log(res);

res = ((a + b * c) / 5) * 2;
console.log(res);

res = b / a + 2 * c;
console.log(res);
res = a - ((b + c) * a) / 1;
console.log(res);
