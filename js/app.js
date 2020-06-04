var playArea = document.getElementsByClassName("playArea")
var playerOne = document.getElementById("player1Score")
var playerTwo = document.getElementById("player2Score")
//player1 tally
//player2 tally

/* ==== VARIABLES ==== */

let spacesFilled = {
    a1: false
    a2: false
    a3: false
    b1: false
    b2: false
    b3: false
    c1: false
    c2: false
    c3: false
}

//variables for how to win here

//player1 win tally

//player2 win tally

//variable for tracking player turn

//variable game is won = boolean true or false -- then run against whether tie or actually lost


/* EVENT LISTENERS */

// event listener click for computer player or human players

playArea.addEventlistener("click", spacesClick)
