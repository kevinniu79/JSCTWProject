//Volume Calculator
// let length = parseFloat(prompt("Please enter the length of the box"));
// let width = parseFloat(prompt("Please enter the width of the box"));
// let height = parseFloat(prompt("Please enter the height of the box"));

// let volume = length*width*height;

// console.log("The volume of the box is " + volume);


//Test Score Average and Letter Grade Calculator
// let scoreOne = parseFloat(prompt("Please enter the first test score"));
// let scoreTwo = parseFloat(prompt("Please enter the second test score"));
// let scoreThree = parseFloat(prompt("Please enter the third test score"));

// let averageScore = (scoreOne + scoreTwo + scoreThree)/3
// let letterGrade = "F";

// if(averageScore >= 92.5) {
//     letterGrade = "A";
// }
// else if(averageScore >= 84.5) {
//     letterGrade = "B";
// }
// else if(averageScore >= 77.5) {
//     letterGrade = "C";
// }
// else if(averageScore >= 69.5) {
//     letterGrade = "D";
// }

// console.log("The average of the three scores is " + averageScore + ". The letter grade is " + letterGrade + ".");


//Longest Last Name
let people = [];
let longestLastNameLength = -1;
let longestLastName = "";
let longestLastNameIndex = 0;

let numPeople = parseFloat(prompt("Please enter the number of people you know"));

for(let i = 0; i<numPeople;i++) {
    people.push(prompt("Enter name"));
    let lastName = people[i].slice(people[i].indexOf(" ", people[i].length));
    if (lastName.length > longestLastNameLength) {
        longestLastNameLength = lastName.length;
        longestLastName = lastName;
        longestLastNameIndex = i;
    }
}

console.log("The person with the longest last name is: " + people[longestLastNameIndex]);

let lastNameLengthCollection = [];
for(let i=0; i<numPeople;i++) {
    lastNameLengthCollection.push(people[i].length);
}
console.log("The range of names is: ")
for(let length of lastNameLengthCollection) {
    console.log(length);
}









