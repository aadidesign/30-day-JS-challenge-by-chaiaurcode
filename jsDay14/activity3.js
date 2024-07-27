
// Task 5
Person.genericGreeting = function() {
    console.log('Hello! This is a generic greeting.');
};

Person.genericGreeting();

// Task 6
Student.numberOfStudents = 0;

Student.incrementStudentCount = function() {
    this.numberOfStudents++;
    console.log(`Total number of students: ${this.numberOfStudents}`);
};

Student.incrementStudentCount();
const student2 = new Student('Jack', 22, 'S54321');
Student.incrementStudentCount();
