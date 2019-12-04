let board = document.getElementsByClassName('board')[0];
let playerOne = "BLUE";
let playerTwo = "GREEN";
const startGame = () => {
for (let y = 0; y < 8; y++) {
  let rowDiv = document.createElement('div')
  rowDiv.setAttribute('class', 'space')
  board.appendChild(rowDiv);
  for (let x = 0; x < 7; x++) {
    let columnDiv = document.createElement('div')
    columnDiv.setAttribute('class', 'space')
    if ((x + y) % 2 != 0) {
      columnDiv.style.background = "red";
      rowDiv.style.background = "black";
    } else {
      columnDiv.style.background = "black";
      rowDiv.style.background = "red";
    } if ((((y == 0) || (y == 2)) && (x % 2 == 0)) || ((y == 1) && (x % 2 != 0))) {
      let playerOnePiece = document.createElement('p');
      playerOnePiece.appendChild(document.createTextNode(playerOne))
      playerOnePiece.setAttribute('class', 'playerOne')
      columnDiv.appendChild(playerOnePiece)
    } else if ((((y == 5) || (y == 7)) && (x % 2 != 0)) || ((y == 6) && (x % 2 == 0))) {
      let playerTwoPiece = document.createElement('p');
      playerTwoPiece.appendChild(document.createTextNode(playerTwo))
      playerTwoPiece.setAttribute('class', 'playerTwo')
      columnDiv.appendChild(playerTwoPiece);
    }
    board.appendChild(columnDiv);
  }
  if ((y == 5) || (y == 7)) {
  let playerTwoPiece = document.createElement('p');
  playerTwoPiece.appendChild(document.createTextNode(playerTwo))
  playerTwoPiece.setAttribute('class', 'playerTwo')
  rowDiv.appendChild(playerTwoPiece);
} else if (y == 1) {
  let playerOnePiece = document.createElement('p');
  playerOnePiece.appendChild(document.createTextNode(playerOne))
  playerOnePiece.setAttribute('class', 'playerOne')
  rowDiv.appendChild(playerOnePiece);
}
}
}
startGame();
