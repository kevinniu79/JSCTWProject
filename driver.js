//let height = prompt("Please enter the height of the box");
//height = parseInt(height);
//let width = prompt("Please enter the width of the box");
//width = parseInt(width);
//let length = prompt("Please enter the length of the box");
//length = parseInt(length);
//let area = length * width * height;
//console.log(area);
/*
let test1 = prompt("Please enter your first test score");
let test2 = prompt("Please enter your second test score");
let test3 = prompt("Please enter your third test score");
test1 = parseInt(test1);
test2 = parseInt(test2);
test3 = parseInt(test3);
let finalScore = (test1 + test2 + test3) / 3;
if(finalScore >= 92.5){
    console.log("Your grade is a A, you got a " + finalScore + "%");
}
else if(finalScore >= 84.5){
    console.log("Your grade is a B, you got a " + finalScore + "%");
}
else if(finalScore >= 77.5){
    console.log("Your grade is a C, you got a " + finalScore + "%");
}
else if(finalScore >= 69.5){
    console.log("Your grade is a D, you got a " + finalScore + "%");
}
else{
    console.log("Your grade is a F, you got a " + finalScore + "%");
}
*/
//Finding out how many people the person knows and adding it to a names array
let numPeople = prompt("Please enter how many people you know");
numPeople = parseInt(numPeople);
const names=[];
for(let i = 0; i < numPeople; i++){
    let name = prompt("Please enter the name of someone you know");
    names.push(name);
}
//Setting variables
let j = 0;
let curr = names[0].length - names[0].indexOf(" ");
let currMax = names[0].length;
let currMin = names[0].length;
//Finding and displaying the longest last name
for(let i = 1; i < names.length; i++){
    if(names[i].length - names[i].indexOf(" ") > curr){
        curr = names[i].length;
        j = i;
    }
}
console.log(names[j]);
//Finding and displaying the range for length of names
for(let i = 1; i < names.length; i++){
    if(names[i].length > names[0].length){
        currMax = names[i].length;
    }
    if(names[i].length < names[0].length){
        currMin = names[i].length;
    }
}
let range = currMax - currMin;
console.log(range);
//Printing out all names
for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}