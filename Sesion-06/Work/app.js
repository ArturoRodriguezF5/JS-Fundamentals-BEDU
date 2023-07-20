const Person = function(name, lastName, age) {

    this.name = name;
    this.lastName = lastName;
    this.age = age;
}

// const p1 = new Person('Arturo', 'Rodríguez', 29);

// console.log(p1)

const Medico = function(name, lastName, age, skills) {
    Person.call(this, name, lastName, age);
    this.skills = skills;
    this.operar = () => console.log('Operando...');
}
const m1 = new Medico('Arturo', 'Rodríguez', 29, 'JS');
console.log(m1.age)
console.log(m1)


const Triangulo = function(base, altura) {
    this.base = base;
    this.altura = altura;
}

Triangulo.prototype.calculaArea = function() {
    return this.base * this.altura / 2;
}

const t1 = new Triangulo(4, 6);

console.log(t1.calculaArea())


/**
 * Reto 1: Crear un function constructor Vec el cual representa un vector en dos dimensiones.
 */

const Vec = function(x, y) {

    this.x = x;
    this.y = y;

    const arrP = [];

    this.plus = (v) => {
        arrP.push(x + v.x)
        arrP.push(y + v.y)
        return arrP;
    }
    const arrM = [];
    this.minus = (v) => {
        arrM.push(x - v.x);
        arrM.push(y - v.y);
        return arrM;
    }

    this.length = () =>{
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    }
};

const v1 = new Vec(1, 2);
const v2 = new Vec(2, 3);

console.log(v1.plus(v2));
console.log(v1.minus(v2));
console.log(v1.length());

/**
 * Reto 2: Group
 */

const Group = function() {
    let g = [];

    this.add = (v) => {
        g.includes(v) ? console.log(`Valor existe en lista, no se puede agregar`) : g.push(v);
    }

    this.has = (v) => {
        return g.includes(v);
    }

    this.from = (a) => {
        g = a;
    }

    this.getAll = () => {
        return g;
    }
};

const g1 = new Group();

g1.from([1, 2, 3, 4, 5]);

console.log(g1.has(5));
console.log(g1.has(10));

g1.add(10);

console.log(g1.getAll())
console.log(g1.has(10));

/**
 * Reto 3: Perimetro de un triagulo
 */

const Triangle = function(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
}

Triangle.prototype.getPerimeter = function(){
    return this.a + this.b + this.c;
}

const t5 = new Triangle(1, 2, 3);
console.log(t5);
console.log(`Perimetro del triángulo: ${t5.getPerimeter()}`);
