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
let whoseTurn = document.createElement('p');
let names = ["Player Two's turn", "Player One's turn"];
document.body.appendChild(whoseTurn);
const playerChange = (whichOne) => {
  whoseTurn.textContent = `${names[whichOne]}`;
}

const createMovePiece = (x, y) => (event) => {

  if (document.getElementById('clicked') != null) {
    if (event.target.nodeName != 'P') {
      console.log(event.target)
      console.log(event)
      console.log(x, y);

      if ((player == "playerTwo") && (document.getElementById("clicked").hasAttribute('name'))) {
        console.log("hello")
        if ((event.target.firstElementChild != null) &&
          (event.target.id == (String(x) + String(y))) &&
          (event.target.firstChild.className == "playerOne")) {

          //jumping
          if ((event.target.id == (String(firstX + 1) + (String(firstY - 1)))) &&
            (document.getElementById(String(firstX + 2) + String(firstY - 2)).firstChild == null)) {
            document.getElementById(String(firstX + 2) + String(firstY - 2)).appendChild(document.getElementById('clicked'));
            event.target.removeChild(event.target.firstChild);
            document.getElementById('clicked').removeAttribute('id');
            turnFunction(2);
            playerChange(1);

          } else if ((event.target.id == (String(firstX - 1) + (String(firstY - 1)))) &&
            (document.getElementById(String(firstX - 2) + String(firstY - 2)).firstChild == null)) {
            document.getElementById(String(firstX - 2) + String(firstY - 2)).appendChild(document.getElementById('clicked'));
            event.target.removeChild(event.target.firstChild);
            document.getElementById('clicked').removeAttribute('id');
            turnFunction(2);
            playerChange(1);
          } else if ((event.target.id == (String(firstX + 1) + (String(firstY + 1)))) &&
            (document.getElementById(String(firstX + 2) + String(firstY + 2)).firstChild == null)) {
            document.getElementById(String(firstX + 2) + String(firstY + 2)).appendChild(document.getElementById('clicked'));
            event.target.removeChild(event.target.firstChild);
            document.getElementById('clicked').removeAttribute('id');
            turnFunction(2);
            playerChange(1);
          } else if ((event.target.id == (String(firstX - 1) + (String(firstY + 1)))) &&
            (document.getElementById(String(firstX - 2) + String(firstY + 2)).firstChild == null)) {
            document.getElementById(String(firstX - 2) + String(firstY + 2)).appendChild(document.getElementById('clicked'));
            document.getElementById('clicked').removeAttribute('id');
            turnFunction(2);
            playerChange(1);
          }
        }
          // just moving, no jump
          if (x == (firstX + 1) && (y == (firstY - 1)) ||
            (x == (firstX - 1)) && (y == (firstY - 1)) &&
            (event.target.firstChild == null)) {
            event.target.appendChild(document.getElementById('clicked'));
            document.getElementById('clicked').removeAttribute('id');
            turnFunction(2);
            playerChange(1);
          } else if (x == (firstX + 1) && (y == (firstY + 1)) ||
            (x == (firstX - 1)) && (y == (firstY + 1)) &&
            (event.target.firstChild == null)) {
            event.target.appendChild(document.getElementById('clicked'));
            document.getElementById('clicked').removeAttribute('id');
            turnFunction(2);
            playerChange(1);
          } else {
            document.getElementById('clicked').removeAttribute('id');
          }
        } else if ((player == "playerOne") && (document.getElementById("clicked").hasAttribute('name'))) {
            console.log("hello")
            if ((event.target.firstElementChild != null) &&
              (event.target.id == (String(x) + String(y))) &&
              (event.target.firstChild.className == "playerTwo")) {

              //jumping
              if ((event.target.id == (String(firstX + 1) + (String(firstY - 1)))) &&
                (document.getElementById(String(firstX + 2) + String(firstY - 2)).firstChild == null)) {
                document.getElementById(String(firstX + 2) + String(firstY - 2)).appendChild(document.getElementById('clicked'));
                event.target.removeChild(event.target.firstChild);
                document.getElementById('clicked').removeAttribute('id');
                turnFunction(1);
                playerChange(0);

              } else if ((event.target.id == (String(firstX - 1) + (String(firstY - 1)))) &&
                (document.getElementById(String(firstX - 2) + String(firstY - 2)).firstChild == null)) {
                document.getElementById(String(firstX - 2) + String(firstY - 2)).appendChild(document.getElementById('clicked'));
                event.target.removeChild(event.target.firstChild);
                document.getElementById('clicked').removeAttribute('id');
                turnFunction(1);
                playerChange(0);
              } else if ((event.target.id == (String(firstX + 1) + (String(firstY + 1)))) &&
                (document.getElementById(String(firstX + 2) + String(firstY + 2)).firstChild == null)) {
                document.getElementById(String(firstX + 2) + String(firstY + 2)).appendChild(document.getElementById('clicked'));
                event.target.removeChild(event.target.firstChild);
                document.getElementById('clicked').removeAttribute('id');
                turnFunction(1);
                playerChange(0);
              } else if ((event.target.id == (String(firstX - 1) + (String(firstY + 1)))) &&
                (document.getElementById(String(firstX - 2) + String(firstY + 2)).firstChild == null)) {
                document.getElementById(String(firstX - 2) + String(firstY + 2)).appendChild(document.getElementById('clicked'));
                document.getElementById('clicked').removeAttribute('id');
                turnFunction(1);
                playerChange(0);
              }
            }
              // just moving, no jump
              if (x == (firstX + 1) && (y == (firstY - 1)) ||
                (x == (firstX - 1)) && (y == (firstY - 1)) &&
                (event.target.firstChild == null)) {
                event.target.appendChild(document.getElementById('clicked'));
                document.getElementById('clicked').removeAttribute('id');
                turnFunction(1);
                playerChange(0);
              } else if (x == (firstX + 1) && (y == (firstY + 1)) ||
                (x == (firstX - 1)) && (y == (firstY + 1)) &&
                (event.target.firstChild == null)) {
                event.target.appendChild(document.getElementById('clicked'));
                document.getElementById('clicked').removeAttribute('id');
                turnFunction(1);
                playerChange(0);
              } else {
                document.getElementById('clicked').removeAttribute('id');
              }
      }// end of king

      else if (player == "playerTwo") {
        const pTwoKing = () => {
          if ((document.getElementById('clicked').parentNode.id == "70") ||
            (document.getElementById('clicked').parentNode.id == "50") ||
            (document.getElementById('clicked').parentNode.id == "30") ||
            (document.getElementById('clicked').parentNode.id == "10")) {
            document.getElementById('clicked').setAttribute('name', 'playerKing');
            document.getElementById('clicked').appendChild(document.createTextNode('KING'))
          }
        };
        // jumping
        if ((event.target.firstElementChild != null) &&
          (event.target.id == (String(x) + String(y))) &&
          (event.target.firstChild.className == "playerOne")) {

          //jumping
          if ((event.target.id == (String(firstX + 1) + (String(firstY - 1)))) &&
            (document.getElementById(String(firstX + 2) + String(firstY - 2)).firstChild == null)) {
            document.getElementById(String(firstX + 2) + String(firstY - 2)).appendChild(document.getElementById('clicked'));
            pTwoKing();
            event.target.removeChild(event.target.firstChild);
            document.getElementById('clicked').removeAttribute('id');
            turnFunction(2);
            playerChange(1);

          } else if ((event.target.id == (String(firstX - 1) + (String(firstY - 1)))) &&
            (document.getElementById(String(firstX - 2) + String(firstY - 2)).firstChild == null)) {
            document.getElementById(String(firstX - 2) + String(firstY - 2)).appendChild(document.getElementById('clicked'));
            pTwoKing();
            event.target.removeChild(event.target.firstChild);
            document.getElementById('clicked').removeAttribute('id');
            turnFunction(2);
            playerChange(1);
          }
        }
        // just moving, no jump
        if ((x == (firstX + 1) && (y == (firstY - 1)) ||
            (x == (firstX - 1)) && (y == (firstY - 1))) &&
          (event.target.firstChild == null)) {
          event.target.appendChild(document.getElementById('clicked'));
          pTwoKing();
          document.getElementById('clicked').removeAttribute('id');
          turnFunction(2);
          playerChange(1);
        }


      } else if (player == "playerOne") {
        const pOneKing = () => {
          if ((document.getElementById('clicked').parentNode.id == "77") ||
            (document.getElementById('clicked').parentNode.id == "57") ||
            (document.getElementById('clicked').parentNode.id == "37") ||
            (document.getElementById('clicked').parentNode.id == "17")) {
            document.getElementById('clicked').setAttribute('name', 'playerKing');
            document.getElementById('clicked').appendChild(document.createTextNode('KING'))
          }
        };
        //jumping
        if ((event.target.firstElementChild != null) &&
          (event.target.id == (String(x) + String(y))) &&
          (event.target.firstChild.className == "playerTwo")) {
          if ((event.target.id == (String(firstX + 1) + (String(firstY + 1)))) &&
            (document.getElementById(String(firstX + 2) + String(firstY + 2)).firstChild == null)) {
            document.getElementById(String(firstX + 2) + String(firstY + 2)).appendChild(document.getElementById('clicked'));
            pOneKing();
            console.log(event.target);
            event.target.removeChild(event.target.firstChild);
            document.getElementById('clicked').removeAttribute('id');
            turnFunction(1);
            playerChange(0);

          } else if ((event.target.id == (String(firstX - 1) + (String(firstY + 1)))) &&
            (document.getElementById(String(firstX - 2) + String(firstY + 2)).firstChild == null)) {
            document.getElementById(String(firstX - 2) + String(firstY + 2)).appendChild(document.getElementById('clicked'));
            pOneKing();
            event.target.removeChild(event.target.firstChild);

            document.getElementById('clicked').removeAttribute('id');
            turnFunction(1);
            playerChange(0);
          }
        }
        if (x == (firstX + 1) && (y == (firstY + 1)) ||
          (x == (firstX - 1)) && (y == (firstY + 1)) &&
          (event.target.firstChild == null)) {
          event.target.appendChild(document.getElementById('clicked'));
          pOneKing();
          document.getElementById('clicked').removeAttribute('id');
          turnFunction(1);
          playerChange(0);
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
  playerChange(1);
}
startGame();
