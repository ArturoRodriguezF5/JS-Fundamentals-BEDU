const Person = function(name, lastName, age) {

    this.name = name;
    this.lastName = lastName;
    this.age = age;
}

const p1 = new Person('Arturo', 'Rodríguez', 29);

console.log(p1)