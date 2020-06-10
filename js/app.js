console.log("load test")

/* ---- Set play area, score tally and move indicators --- */
let playerX = document.querySelectorAll("#playerXTally")
let playerO = document.querySelectorAll("#playerOTally")
let indicatorX = "X"
let indicatorO = "O"
let turnMechanism = 0
let currentPlayer = indicatorX
let player = indicatorX
let turnIndicator = document.querySelectorAll("#turnIndicator")

/* ---- PLAY AREA VARIABLES, all set to false for new game ---- */
let newGame =[
    a1 = false,
    a2 = false,
    a3 = false,
    b1 = false,
    b2 = false,
    b3 = false,
    c1 = false,
    c2 = false,
    c3 = false
]

/* ---- EVERY WIN CONDITION, check against array ---- */

var winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

//variable for tracking player turn

function playerTurn(){
    // if turn mechanism is 0 the player X goes
    // innerText that its player X turn
    // else statement because anything other than 0 means its player O turn 
    // innerText that its player O turn
}

console.log(currentPlayer)
console.log(turnMechanism)
console.log(player)


// variable game is won = then run against whether tie or actually lost

// place indicator in play area

// start game / new game runs a function that enables the listener for clicking

// still figuring out why event listeners kept breaking with classes playArea and .spaces so DRY has been ignored while I keep building/testing

document.getElementById("a1").addEventListener("click", function() {
    console.log("a1")
  });
document.getElementById("a2").addEventListener("click", function() {
    console.log("a2")
  });
document.getElementById("a3").addEventListener("click", function() {
    console.log("a3")
  });
document.getElementById("b1").addEventListener("click", function() {
    console.log("b1")
  });
document.getElementById("b2").addEventListener("click", function() {
    console.log("b2")
  });
document.getElementById("b3").addEventListener("click", function() {
    console.log("b3")
  });
document.getElementById("c1").addEventListener("click", function() {
    console.log("c1")
  });
document.getElementById("c2").addEventListener("click", function() {
    console.log("c2")
  });
document.getElementById("c3").addEventListener("click", function() {
    console.log("c3")
  });
