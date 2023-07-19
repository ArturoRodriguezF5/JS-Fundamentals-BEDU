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