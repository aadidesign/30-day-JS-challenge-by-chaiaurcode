
// Task 3
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    getStudentId() {
        return this.studentId;
    }
}

// Task 4
Student.prototype.greeting = function() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old and my student ID is ${this.studentId}.`;
};

const student1 = new Student('Jane', 20, 'S12345');
console.log(student1.getStudentId());
console.log(student1.greeting());
