

let one = prompt("What is the score? ");
one = parseInt(one); 
let two = prompt("What is the score"); 
two = parseInt(two); 
let three = prompt("What is the score? "); 
three = parseInt(three); 

let avg = (one+two+three)/3; 

console.log("Average test score: " + avg);

let letter = "A"
if(avg >= 92.5){
 letter = "A"; 
}
else if(avg >= 84.5){
    letter = "B"; 
}
else if(avg >= 77.5){
    letter = "C"; 
}
else if(avg >= 69.5){
    letter = "D"; 
}
else{
    letter = "F"; 
}

console.log("Letter grade: " + letter);  
