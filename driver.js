/*let side1;
let side2;
let side3;

side1 = prompt("Side 1 length?");
side2 = prompt("Side 2 width?");
side3 = prompt("Side 3 height?");

let volume;
volume = side1 * side2 * side3;
console.log("Volume: " + volume);
*/

/*
let score1;
let score2;
let score3;
const denominator = 3;

score1 = parseFloat(prompt("Score 1?"));
score2 = parseFloat(prompt("Score 2?"));
score3 = parseFloat(prompt("Score 3?"));

let avg = (score1 + score2 + score3) / denominator;

console.log("Average of the test scores were: " + avg);

if(avg >= 92.5){
    console.log("You get an A!");
}
if(avg >= 84.5 && avg < 92.5){
    console.log("You get an B!");
}
if(avg >= 77.5 && avg < 84.5){
    console.log("You get an C!");
}
if(avg >= 69.5 && avg < 77.5){
    console.log("You get an D!");
} 
if(avg < 69.5){
    console.log("You get an F!");
}
*/

let people;
const peopleNames = [];
let smallest;

people = parseFloat(prompt("Number of People you know?"));
for(let i = 0; i < people; i++){
    peopleNames[i] = prompt("Name of person " + i + "?");
    let biggest = peopleNames[0];
    if(i == 1){
        smallest = peopleNames[1];
    }
    if(peopleNames[i].length > biggest.length){
        biggest = peopleNames[i];
    }
    if(peopleNames[i].length<smallest.length){
        smallest = peopleNames[i];
    }
}

console.log("Longest name: " + biggest);
console.log("Range of lengths: " + smallest + " to " + biggest);



