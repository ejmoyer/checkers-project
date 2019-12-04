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
    if ((x + y) % 2 == 0) {
      columnDiv.style.background = "red";
      rowDiv.style.background = "black";
    } else {
      columnDiv.style.background = "black";
      rowDiv.style.background = "red";
    } if ((((y == 0) || (y == 2)) && (x % 2 == 0)) || ((y == 1) && (x % 2 != 0))) {
      columnDiv.appendChild(document.createTextNode(playerOne))
    } else if ((((y == 5) || (y == 7)) && (x % 2 == 0)) || ((y == 6) && (x % 2 != 0))) {
      columnDiv.appendChild(document.createTextNode(playerTwo))
    }
    board.appendChild(columnDiv);
  }
  if (y == 6) {
  rowDiv.appendChild(document.createTextNode(playerTwo))
} else if (y == 1) {
  rowDiv.appendChild(document.createTextNode(playerOne))
}
}
}
startGame();
