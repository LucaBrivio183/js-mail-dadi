//strict rules

'use strict'

//alert just for start the game

alert("Wanna play dice?");

//define  the  2 variables with random Int number (1 to 6) one  for player one for machine

const playerResult = Math.floor(Math.random() * 6) + 1;
const machineResult = Math.floor(Math.random() * 6) + 1;

//define let variable for show result on screen

let shownResult = "";

//confront the 2 results 

if  (playerResult > machineResult)  {

    console.log("you won!!!");
    shownResult = ("you won!!!");

} else if (playerResult < machineResult) {

    console.log("you lost!!!");
    shownResult = ("you lost!!!");

} else {

    console.log("draw!!!");
    shownResult = ("draw!!!");

}

document.querySelector("h1").innerHTML = `${shownResult}`;
