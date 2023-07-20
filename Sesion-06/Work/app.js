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

const Group = function(g) {
    this.g = [g];

    this.add = (v) => {
        if(! list.includes(v)) {
            list.push(v);
        }
    }

    this.has = (v) => {
        return list.includes(v);
    }
     
    this.from = (group) => {
        g = group;
    }
}

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
