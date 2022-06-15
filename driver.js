let peopleNum = parseInt(prompt("How many people do you know?"));
const peopleList = [];
let nameLength = 0;
let shortestNameLength = 100;
let names = [];
longestNameIndex = 0;
for(let i = 0; i<peopleNum; i++){
    peopleList[i] = prompt("Please input the name of a person you know:");
}
for(let i = 0; i<peopleList.length; i++){
    names = peopleList[i].split(" ");
    if(names[1].length > nameLength){
        nameLength = names[1].length;
        longestNameIndex = i;
    }
    if(names[1].length < shortestNameLength){
        shortestNameLength = names[1].length;
    }
}
console.log("The person you know with the longest last name is: "+peopleList[longestNameIndex]);
console.log("The length of last names of people you submitted was from "+shortestNameLength+" to "+nameLength);
console.log("The people you submitted were: ");
for(let i = 0; i<peopleList.length; i++){
    console.log(peopleList[i]);
}