document.addEventListener("DOMContentLoaded", function() {
    console.log("my page loaded.")

    /* ---- Set play area, score tally and move indicators --- */
    let playArea = document.getElementsByClassName("playArea")
    let playerOne = document.getElementById("player1Score")
    let playerTwo = document.getElementById("player2Score")
    let indicatorX = "X"
    let indicatorO = "O"


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
        [a1, a2, a3],
        [b1, b2, b3],
        [c1, c2, c3],
        [a1, b1, c1],
        [a2, b2, c2],
        [a3, b3, c3],
        [a1, b2, c3],
        [a3, b2, c1]
    ]

    //variable for tracking player turn

    //variable game is won = boolean true or false -- then run against whether tie or actually lost

    // place indicator in play area

    // begin new game


})