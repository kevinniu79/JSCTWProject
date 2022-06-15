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
let grade = "C";

if(averageScore >= 92.5) {
    grade = "A";
}
else if(averageScore >= 84.5) {
    grade = "B";
}
else if(averageScore >= 77.5) {
    grade = "C";
}
else if(averageScore >= 69.5) {
    grade = "D";
}

console.log("The average of the three score is " + averageScore + ". The letter grade is " + grade);


