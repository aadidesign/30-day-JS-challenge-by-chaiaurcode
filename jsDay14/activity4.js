
// Task 7
Object.defineProperty(Person.prototype, 'fullName', {
    get: function() {
        return `${this.firstName} ${this.lastName}`;
    }
});

// Task 8
Object.defineProperty(Person.prototype, 'fullName', {
    set: function(name) {
        const parts = name.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
});

const person2 = new Person('Doe', 30);
person2.fullName = 'John Doe';
console.log(person2.fullName);
