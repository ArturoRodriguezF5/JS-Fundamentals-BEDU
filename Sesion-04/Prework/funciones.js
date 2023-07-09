/**
 * Funcion básica
*/
console.log("Resultado con función básica: " + myFunction(5, 2));

function myFunction (primerValor, segundoValor) {
    return primerValor * segundoValor;
}

/**
 * Funcion anónima
 */

const anonimaFunction = function (primerValor, segundoValor) {
    return primerValor / segundoValor;
}

const r = anonimaFunction(50, 5);
console.log("Resultado de función ánonima: " + r);

/**
 * Función flecha (lambda)
 */

const funcOpe = (primerValor, segundoValor) => primerValor + segundoValor;

console.log("Resultado de funcion flecha: " + funcOpe(500, 10));