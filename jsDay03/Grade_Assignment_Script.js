
// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
function assignGrade(score) {
  let grade;
  switch(true) {
    case (score >= 90): grade = 'A'; break;
    case (score >= 80): grade = 'B'; break;
    case (score >= 70): grade = 'C'; break;
    case (score >= 60): grade = 'D'; break;
    default: grade = 'F';
  }
  console.log("Grade:", grade);
}
assignGrade(95);
assignGrade(82);
assignGrade(73);
assignGrade(59);
