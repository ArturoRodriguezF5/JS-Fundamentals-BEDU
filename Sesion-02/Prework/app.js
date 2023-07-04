/*for (let i = 0; i <= 50; i++) {
    if(i % 2 != 0) {
        console.log(i);
    }
}

console.log("Ciclo While");
let a = 0;
while (a <= 12) {
    if (a % 2 == 0) {
        console.log(a);
    }
    a++;
}

for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= i; j++) {
        console.log("#");
    }
    console.log("\n");
} */

for (let i = 1; i <=100; i++) {
    if (i % 3 == 0) {
        console.log("Fizz");
    } if (i % 5 == 0) {
        console.log("Buzz");
    } if (i % 5 == 0 && i % 3 == 0) {
        console.log("FizzBuzz");
    } else {
        console.log(i);
    }     
}