let board = document.getElementsByClassName('board')[0];

const createMovePiece = (x, y) => (event) => {
  if (document.getElementById('clicked') != null) {
    //create function (x, y) {returns () => console.log(x, y)}
    event.target.appendChild(document.getElementById('clicked'));
    document.getElementById('clicked').removeAttribute('id');
    //  else {
    //  alert ('Not a legal move!');
    //}
  } else if (event.target.nodeName != 'DIV') {
    console.log(x, y);
    event.target.setAttribute('id', 'clicked');
  }
};

const startGame = () => {
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      let square = document.createElement('div')
      square.setAttribute('class', 'space')

      if ((x + y) % 2 == 0) {
        square.style.background = "black";
      } else {
        square.style.background = "red";
      }

      let piece = document.createElement('p');
      if ((((y == 0) || (y == 2)) && (x % 2 == 0)) || ((y == 1) && (x % 2 != 0))) {
        piece.appendChild(document.createTextNode("BLUE"))
        piece.setAttribute('class', 'playerOne')
        square.appendChild(piece);
      } else if ((((y == 5) || (y == 7)) && (x % 2 != 0)) || ((y == 6) && (x % 2 == 0))) {
        piece.appendChild(document.createTextNode("GREEN"))
        piece.setAttribute('class', 'playerTwo')
        square.appendChild(piece);
      }
      board.appendChild(square);
    }
  }
}
startGame();
