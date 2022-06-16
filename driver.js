

let numberOfPeople = prompt("How many people do you know? ");
numberOfPeople = parseInt(numberOfPeople); 

const arr = []; 
for(let i = 0; i<numberOfPeople; i++){
let name = prompt("What are the names of those people? ");
arr[i] = name; 
}
function getLastName(name){
    let blank = name.indexOf(" ");
    let lastName = name.substring(blank, name.length);  
}

const newArr = arr.map(getLastName); 

for(let i = 0; i<newArr.length; i++){
   
   console.log( Math.max(newArr[i].length - 1)); 
}

for(let i = 0; i<newArr.length; i++){
    console.log(newArr[i]); 
}

