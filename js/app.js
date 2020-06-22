// all win conditions
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
]


// helper function that grabs the array
const grid = () => Array.from(document.getElementsByClassName("q"))

// converts the cell from a string to a number
const qNumId = (qE1) => Number.parseInt(qE1.id.replace("q",""))

// return which cells are empty
const emptyQs = () => grid().filter(_qE1 => _qE1.innerText === "")

// are all items in the array the same that aren't blanks
const allSame = (arr) => arr.every(_qEl => _qEl.innerText === arr[0].innerText && _qEl.innerText !== '')

const takeTurn = (index, letter) => grid()[index].innerText = letter

// randomly places an O on the game board where ever there is an empty space
const opponentChoice = () => qNumId(emptyQs()[Math.floor(Math.random() * emptyQs().length)])

// end game states - player win text display, winning combo color gets highlighted and listeners are disabled
const endGame = (winningSequence) => {
  winningSequence.forEach(_qE1 => _qE1.classList.add("winner"))
  document.getElementById("turnDisplay").innerHTML = "PLAYER 1 WINS! START A NEW GAME."
  disableListeners()
}

// victory is set to false initially and a forEach loop checks if the grid has met any of the win states in my winningcombos array, if an allSame() sequence is found then then set victory to true and call endgame
const checkForVictory = () => {
  let victory = false

  winningCombos.forEach(_c => {
      const _grid = grid()
      const sequence = [_grid[_c[0]], _grid[_c[1]], _grid[_c[2]]]
      if(allSame(sequence)) {
          victory = true
          endGame(sequence)
      }
  })

  return victory
}


// opponent takes turn, display indicator in browser and disable game board clicking until opponent turn is over
const opponentTurn = () => {
  disableListeners()
  document.getElementById("turnDisplay").innerHTML = "PLAYER 2 IS MAKING THEIR MOVE. PLEASE WAIT..."
  setTimeout(() => {
      takeTurn(opponentChoice(), "O")
      document.getElementById("turnDisplay").innerHTML = "Player 1, place your X in a space."
      if(!checkForVictory())
          enableListeners()
  }, 1000)
}

// click function for player
const clickFn = ($event) => {
  takeTurn(qNumId($event.target), "X")
  if(!checkForVictory())
      opponentTurn()
}


// turn on click for player turn
const enableListeners = function() {
  grid().forEach(_qE1 => _qE1.addEventListener("click", clickFn))
}

// turn off click when not player turn
const disableListeners = () => grid().forEach(_qE1 => _qE1.removeEventListener("click", clickFn))

// calls the function
enableListeners()
