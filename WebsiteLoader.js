var usableList = nameList.split(")");

let nameP = document.getElementById("Name");
let franchiseP = document.getElementById("Franchise")



function Load(){
    chosenCharacter = usableList[Math.floor(Math.random()*usableList.length)].split(" (");

    console.log(chosenCharacter)

    nameP.innerHTML = chosenCharacter[0];
    franchiseP.innerHTML = chosenCharacter[1];
}
