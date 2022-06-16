

let numberOfPeople = prompt("How many people do you know? ");
numberOfPeople = parseInt(numberOfPeople); 

const arr = []; 
for(let i = 0; i<numberOfPeople; i++){
let name = prompt("What are the names of those people? ");
arr[i] = name; 
}

for(let i = 0; i<arr.length; i++){
    let blank = arr[i].indexOf(" ");
    let lastName = arr[i].substring(blank, arr[i].length - 1); 
    console.log(lastName); 
   console.log( Math.max(arr[i])); 
}

