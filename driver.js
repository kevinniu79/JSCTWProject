//let height = prompt("Please enter the height of the box");
//height = parseInt(height);
//let width = prompt("Please enter the width of the box");
//width = parseInt(width);
//let length = prompt("Please enter the length of the box");
//length = parseInt(length);
//let area = length * width * height;
//console.log(area);

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