let score1 = parseInt(prompt("Please enter your first score: "));
let score2 = parseInt(prompt("Please input your second score: "));
let score3 = parseInt(prompt("Please input your third score: "));
let averageScore = (score1+score2+score3)/3;
let letterGrade = "F";
if(averageScore > 92.5){
    letterGrade = "A";
}
else if(averageScore > 84.5){
    letterGrade = "B";
}
else if(averageScore > 77.5){
    letterGrade = "C";
}
else if(averageScore > 69.5){
    letterGrade = "D";
}
console.log("Your average score is "+averageScore+", making your grade a "+letterGrade);