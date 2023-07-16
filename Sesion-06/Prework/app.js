const Person = function(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
}


const p1 = new Person('Arturo', 'Rodríguez', 29);

console.log(p1);

/**
 * Herencia
 */

const Person2 = function(name) {
    this.name = name;
};

const Developer = function(name, skills, softSkills, recidency) {
    Person2.call(this, name);

    this.skills = skills;
    this.softSkills = softSkills;
    this.recidency = recidency;
};

const dev1 = new Developer('Arturo', 'Java, JS, Spring', 'attendancy', 'Mx');
console.log(dev1);