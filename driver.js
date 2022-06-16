let peopleNum = parseInt(prompt("How many people do you know?"));
const peopleList = [];
for(let i = 0; i<peopleNum; i++){
    peopleList[i] = prompt("Please input the name of a person you know:");
}
let nameInfo = namesInfo(peopleList);
console.log("The person you know with the longest last name is: "+nameInfo.longestName);
console.log("The length of last names of people you submitted was from "+nameInfo.shortestLength+" to "+nameInfo.longestLength);
console.log("The people you submitted were: ");
for(let i = 0; i<peopleList.length; i++){
    console.log(peopleList[i]);
}

function namesInfo(listOfNames){
    const info = {
        longestName : "",
        shortestLength : 0,
        longestLength : 0
    }
    let names = listOfNames[0].split(" ");
    info.shortestLength = names[1].length;
    let longestNameIndex = 0;
    for(let i = 0; i<listOfNames.length; i++){
        names = listOfNames[i].split(" ");
        if(names[1].length > info.longestLength){
            info.longestLength = names[1].length;
            longestNameIndex = i;
        }
        if(names[1].length < info.shortestLength){
            info.shortestLength = names[1].length;
        }
    }
    info.longestName = listOfNames[longestNameIndex];
    return info;
}