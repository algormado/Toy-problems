// This function declares the grade calculating system
function calculateGrades() {
    let marks = prompt("Enter students marks (between 0 and 100)");


    // This converts the input to a number
    marks = parseFloat(marks);

    // This checks if the input value is between the given range
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid marks range, Please enter a number between 0 and 100");
        return;
    }

    // This determines the grade based on the marks scored
    let grade;

    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
        grade = 'B';
    } else if (marks >= 50 && marks <= 59) {
        grade = 'C';
    } else if (marks >= 40 && marks <= 49) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    console.log("Student Grade: " + grade);
}

calculateGrades();