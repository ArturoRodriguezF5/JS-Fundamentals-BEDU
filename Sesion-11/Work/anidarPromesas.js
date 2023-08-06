function addOne(valor) {
    return new Promise(() => {
        setTimeout((resolve) => {
            valor += 1;
        }, 500)
    })
}

addOne(1)
    .then((x) => {
        console.log(x)
        return addOne(x)
    })
    .then(x => {
        console.log(x)
        return addOne(x)
    })

// Async / Await

async function fooA() {
    return "Hola Async Await"
}

fooA()
    .then(x => console.log(x))

async function bar() {
    let saludo = await fooA()
    console.log(saludo)
}

bar()

console.log(bar())

// fooA()
//     .then(x => console.log(x))

// async function bar() {
//     let saludo = await fooA()
//     console.log(saludo)
// }

// bar()

// console.log(bar())


const names = ["abril", "June"];

console.log(names.length)

let str = "12";

console.log(+str)
console.log(typeof str)


let n = 10;
let m = ++n;

console.log(n, m)

console.log(!(true && false || true))