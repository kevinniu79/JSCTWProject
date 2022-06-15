//Volume Calculator
// let length = parseFloat(prompt("Please enter the length of the box"));
// let width = parseFloat(prompt("Please enter the width of the box"));
// let height = parseFloat(prompt("Please enter the height of the box"));

// let volume = length*width*height;

// console.log("The volume of the box is " + volume);

//Test Score
let scoreOne = parseFloat(prompt("Please enter the first test score"));
let scoreTwo = parseFloat(prompt("Please enter the second test score"));
let scoreThree = parseFloat(prompt("Please enter the third test score"));

let averageScore = (scoreOne + scoreTwo + scoreThree)/3
let letterGrade = "F";

if(averageScore >= 92.5) {
    letterGrade = "A";
}
else if(averageScore >= 84.5) {
    letterGrade = "B";
}
else if(averageScore >= 77.5) {
    letterGrade = "C";
}
else if(averageScore >= 69.5) {
    letterGrade = "D";
}

console.log("The average of the three score is " + averageScore + ". The letter grade is " + letterGrade);


