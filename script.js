let board = document.getElementsByClassName('board')[0];

let firstX;
let firstY;

let player;

let turn;

const turnFunction = (who) => {
  if (who == 1) {
    turn = 2;
  } else {
    turn = 1;
  }
};
turnFunction(0);

/*const createKing = (piece) => {
  if (event.target.id == "piece == "playerOne") {
    become king
  }
  else if (piece == "playerTwo") {
    become king
  }
}
*/ 
const createMovePiece = (x, y) => (event) => {

  if (document.getElementById('clicked') != null) {
    if (event.target.nodeName != 'P') {
      console.log(event.target)
      console.log(x, y);
      if (player == "playerTwo") {
        // if the space clicked's first element child has a class of the other player, jump further
        // if there is a piece, then let you jump further\
        if ((event.target.firstElementChild != null) &&
          (event.target.id == (String(x) + String(y))) &&
          (event.target.firstChild.className == "playerOne")) {
          /*  console.log("yes");
            console.log(event.target.id)
            console.log(firstX, firstY)
            console.log(x, y)
            */
          if ((event.target.id == (String(firstX + 1) + (String(firstY - 1)))) &&
            (document.getElementById(String(firstX + 2) + String(firstY - 2)).firstChild == null)) {
            document.getElementById(String(firstX + 2) + String(firstY - 2)).appendChild(document.getElementById('clicked'));
            document.getElementById('clicked').removeAttribute('id');
            turnFunction(2);

          } else if ((event.target.id == (String(firstX - 1) + (String(firstY - 1)))) &&
            (document.getElementById(String(firstX - 2) + String(firstY - 2)).firstChild == null)) {
            document.getElementById(String(firstX - 2) + String(firstY - 2)).appendChild(document.getElementById('clicked'));
            document.getElementById('clicked').removeAttribute('id');
            turnFunction(2);
          }
        }
        if ((x == (firstX + 1) && (y == (firstY - 1)) ||
            (x == (firstX - 1)) && (y == (firstY - 1))) &&
          (event.target.firstChild == null)) {
          event.target.appendChild(document.getElementById('clicked'));
          document.getElementById('clicked').removeAttribute('id');
          turnFunction(2);
        }


      } else if (player == "playerOne") {

        if ((event.target.firstElementChild != null) &&
          (event.target.id == (String(x) + String(y))) &&
          (event.target.firstChild.className == "playerTwo")) {
          /*  console.log("no");
            console.log(event.target.id)
            console.log(firstX, firstY)
            console.log(x, y)
            */
          if ((event.target.id == (String(firstX + 1) + (String(firstY + 1)))) &&
            (document.getElementById(String(firstX + 2) + String(firstY + 2)).firstChild == null)) {
            document.getElementById(String(firstX + 2) + String(firstY + 2)).appendChild(document.getElementById('clicked'));
            document.getElementById('clicked').removeAttribute('id');
            turnFunction(1);
          } else if ((event.target.id == (String(firstX - 1) + (String(firstY + 1)))) &&
            (document.getElementById(String(firstX - 2) + String(firstY + 2)).firstChild == null)) {
            document.getElementById(String(firstX - 2) + String(firstY + 2)).appendChild(document.getElementById('clicked'));
            document.getElementById('clicked').removeAttribute('id');
            turnFunction(1);
          }
        }
        if (x == (firstX + 1) && (y == (firstY + 1)) ||
          (x == (firstX - 1)) && (y == (firstY + 1)) &&
          (event.target.firstChild == null)) {
          event.target.appendChild(document.getElementById('clicked'));
          document.getElementById('clicked').removeAttribute('id');
          turnFunction(1);
        }
      }
    }

  } else if (event.target.nodeName != 'DIV') {
    firstX = x;
    firstY = y;
    console.log(event.target.className)
    console.log(x, y)

    if ((event.target.className == 'playerTwo') && (turn == 2)) {
      player = 'playerTwo';
      event.target.setAttribute('id', 'clicked');
    } else if ((event.target.className == 'playerOne') && (turn == 1)) {
      player = 'playerOne';
      event.target.setAttribute('id', 'clicked');
    }
  }
};

const startGame = () => {
  for (let y = 0; y < 8; y++) {

    for (let x = 0; x < 8; x++) {

      let square = document.createElement('div')
      square.setAttribute('id', (String(x) + String(y)));
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
