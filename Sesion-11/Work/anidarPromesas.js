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

fooA()
    .then(x => console.log(x))

async function bar() {
    let saludo = await fooA()
    console.log(saludo)
}

bar()

console.log(bar())
