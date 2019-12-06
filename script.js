let board = document.getElementsByClassName('board')[0];

let firstX;
let firstY;

let jumpX;
let jumpY;

let player;

const createMovePiece = (x, y) => (event) => {
  if (document.getElementById('clicked') != null) {
    if (event.target.nodeName != 'P') {
      console.log(event.target)
      console.log(x, y);
      if (player == "playerTwo") {
        // if the space clicked's first element child has a class of the other player, jump further
        // if there is a piece, then let you jump further\
        if (event.target.firstElementChild != null) {
          console.log("yes");
          jumpY = y - 1;
          jumpX = x + 1;
          console.log(x, y)
          if (jumpX == (firstX + 2) && (jumpY == (firstY - 2)) ||
          (jumpX == (firstX - 2)) && (jumpY == (firstY - 2))) {
            event.target.appendChild(document.getElementById('clicked'));
            document.getElementById('clicked').removeAttribute('id');
          }
        }
        if (x == (firstX + 1) && (y == (firstY - 1)) ||
          (x == (firstX - 1)) && (y == (firstY - 1))) {
          event.target.appendChild(document.getElementById('clicked'));
          document.getElementById('clicked').removeAttribute('id');
        }


      } else if (player == "playerOne") {

        if (x == (firstX + 1) && (y == (firstY + 1)) ||
          (x == (firstX - 1)) && (y == (firstY + 1))) {
          event.target.appendChild(document.getElementById('clicked'));
          document.getElementById('clicked').removeAttribute('id');
        }
      }
    }

  } else if (event.target.nodeName != 'DIV') {
    firstX = x;
    firstY = y;
    console.log(event.target.className)
    console.log(x, y)

    if (event.target.className == 'playerTwo') {
      player = 'playerTwo';
    } else {
      player = 'playerOne';
    }
    event.target.setAttribute('id', 'clicked');
  }
};

const startGame = () => {
  for (let y = 0; y < 8; y++) {

    for (let x = 0; x < 8; x++) {

      let square = document.createElement('div')
      square.dataset.x = x;
      square.dataset.y = y;
      square.setAttribute('class', 'space')

      if ((x + y) % 2 == 0) {
        square.addEventListener("click", createMovePiece(x, y))
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
