function foo() {
    setTimeout(() => {
        return "Hola";
    }, 5000)
}


const saludo = foo();

console.log(saludo);

// CallBacks

function fooC (callback) {
    setTimeout(() => {
        callback("Hola")
    }, 1500)
}

fooC((texto) => console.log(texto));


//CallBack Hell

function imprime() {
    setTimeout(() => {
        console.log("1")
        setTimeout(() => {
            console.log("2")
            setTimeout(() => {
                console.log("3")
            }, 3000)
        }, 2000)
    }, 1000)
}

imprime((x) => console.log(x))

// Promisses


function fooP() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hola desde una promesa.");
        }, 2000)
    })
}

fooP()
    .then(x => console.log(x));