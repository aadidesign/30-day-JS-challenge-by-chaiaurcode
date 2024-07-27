
// Task 1
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Task 2
Person.prototype.updateAge = function(newAge) {
    this.age = newAge;
    console.log(`Updated age: ${this.age}`);
};

const person1 = new Person('John', 25);
console.log(person1.greeting());
person1.updateAge(26);
