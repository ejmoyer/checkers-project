let board = document.getElementsByClassName('board')[0];

let firstX;
let firstY;

let player;

const add = (x, y) => {
  return x + y;
};

const sub = (x, y) => {
  return x - y;
};

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
};

const whoWon = () => {
  if (document.querySelector('.playerOne') == null) {
    alert('Player Two wins!');
  } else if (document.querySelector('.playerTwo') == null) {
    alert('Player One Wins!');
  }
}

const pOneKing = () => {
  if (((document.getElementById('clicked').parentNode.id == "77") ||
      (document.getElementById('clicked').parentNode.id == "57") ||
      (document.getElementById('clicked').parentNode.id == "37") ||
      (document.getElementById('clicked').parentNode.id == "17")) &&
    (document.getElementById('clicked').hasAttribute('name') == false)) {
    document.getElementById('clicked').setAttribute('name', 'playerKing');
    document.getElementById('clicked').appendChild(document.createTextNode('KING'))
  }
};

const pTwoKing = () => {
  if (((document.getElementById('clicked').parentNode.id == "00") ||
      (document.getElementById('clicked').parentNode.id == "20") ||
      (document.getElementById('clicked').parentNode.id == "40") ||
      (document.getElementById('clicked').parentNode.id == "60")) &&
    (document.getElementById('clicked').hasAttribute('name') == false)) {
    document.getElementById('clicked').setAttribute('name', 'playerKing');
    document.getElementById('clicked').appendChild(document.createTextNode('KING'))
  }
};

const playerJump = (check1, jump1, check2, jump2) => {
  if ((event.target.parentNode.id == String(add(firstX, check1)) + String(sub(firstY, jump1))) &&
(document.getElementById(String(add(firstX, check2)) + String(sub(firstY, jump2))).firstChild == null)) {
    document.getElementById(String(add(firstX, check2)) + String(sub(firstY, jump2))).appendChild(document.getElementById('clicked'));
    document.getElementById(String(add(firstX, check1)) + String(sub(firstY, jump1))).removeChild(document.getElementById(String(add(firstX, check1)) + String(sub(firstY, jump1))).firstChild)
    firstX = add(firstX, check2);
    firstY = sub(firstY, jump2);
    if (document.getElementById('clicked').hasAttribute('name') == false) {
      if (player == "playerTwo") {
        pTwoKing();
      } else if (player == "playerOne") {
        pOneKing();
      }
    }
    if ((document.getElementById(String(add(firstX, check2)) + String(sub(firstY, jump2))) == null) ||
    (document.getElementById(String(add(firstX, check2)) + String(sub(firstY, jump2))).firstChild != null)) {
      if (turn == 1) {
        turn = 2;
        playerChange(0)
      } else if (turn == 2) {
        turn = 1;
        playerChange(1)
      }
    } else {
      playerJump(check1, jump1, check2, jump2);
    }
    document.getElementById('clicked').removeAttribute('id');
  }
};



const createMovePiece = (x, y) => (event) => {

  const playerKingMove = (check1, check2, check3, check4) => {
    if ((x == add(firstX, check1) && (y == sub(firstY, check2)) ||
        (x == add(firstX, check3)) && (y == sub(firstY, check4))) &&
      (event.target.firstChild == null)) {
      event.target.appendChild(document.getElementById('clicked'));
      if (document.getElementById('clicked').hasAttribute('name') == false) {
        if (player == "playerTwo") {
          pTwoKing();
        } else if (player == "playerOne") {
          pOneKing();
        }
      }
      document.getElementById('clicked').removeAttribute('id');
      if (turn == 1) {
        turn = 2;
        playerChange(0)
      } else if (turn == 2) {
        turn = 1;
        playerChange(1)
      }
    } else if ((x == sub(firstX, check1) && (y == add(firstY, check2)) ||
        (x == sub(firstX, check3)) && (y == add(firstY, check4))) &&
      (event.target.firstChild == null)) {
      event.target.appendChild(document.getElementById('clicked'));
      if (document.getElementById('clicked').hasAttribute('name') == false) {
        if (player == "playerTwo") {
          pTwoKing();
        } else if (player == "playerOne") {
          pOneKing();
        }
      }
      document.getElementById('clicked').removeAttribute('id');
      if (turn == 1) {
        turn = 2;
        playerChange(0)
      } else if (turn == 2) {
        turn = 1;
        playerChange(1)
      }
    } else {
      document.getElementById('clicked').removeAttribute('id');
    }
  };

  const playerTwoMove = (check1, check2, check3, check4) => {
    if ((x == add(firstX, check1) && (y == sub(firstY, check2)) ||
        (x == add(firstX, check3)) && (y == sub(firstY, check4))) &&
      (event.target.firstChild == null)) {
      event.target.appendChild(document.getElementById('clicked'));
      if (document.getElementById('clicked').hasAttribute('name') == false) {
        pTwoKing();
      }
      document.getElementById('clicked').removeAttribute('id');
      if (turn == 2) {
        turn = 1;
        playerChange(1)
      }
    } else {
      document.getElementById('clicked').removeAttribute('id');
    }
  };

  const playerOneMove = (check1, check2, check3, check4) => {
    if ((x == sub(firstX, check1) && (y == add(firstY, check2)) ||
        (x == sub(firstX, check3)) && (y == add(firstY, check4))) &&
      (event.target.firstChild == null)) {
      event.target.appendChild(document.getElementById('clicked'));
      if (document.getElementById('clicked').hasAttribute('name') == false) {
        if (player == "playerOne") {
          pOneKing();
        }
      }
      document.getElementById('clicked').removeAttribute('id');
      if (turn == 1) {
        turn = 2;
        playerChange(0)
      }
    } else {
      document.getElementById('clicked').removeAttribute('id');
    }
  };

  whoWon();
  if (document.getElementById('clicked') != null) {

    if ((player == "playerTwo") && (document.getElementById("clicked").hasAttribute('name'))) {
      if (event.target.className == "playerOne") {

        //jumping
        playerJump(1, 1, 2, 2);
        turnFunction(2);
        playerChange(1);

        playerJump(-1, 1, -2, 2);
        turnFunction(2);
        playerChange(1);

        playerJump(1, -1, 2, -2);
        turnFunction(2);
        playerChange(1);

        playerJump(-1, -1, -2, -2);
        turnFunction(2);
        playerChange(1);
      }

      // movement
      playerKingMove(1, 1, -1, 1);
    } else if ((player == "playerOne") && (document.getElementById("clicked").hasAttribute('name'))) {
      if (event.target.className == "playerTwo") {

        //jumping
        playerJump(1, 1, 2, 2);
        turnFunction(1);
        playerChange(0);

        playerJump(-1, 1, -2, 2)
        turnFunction(1);
        playerChange(0);

        playerJump(1, -1, 2, -2)
        turnFunction(1);
        playerChange(0);

        playerJump(-1, -1, -2, -2)
        turnFunction(1);
        playerChange(0);
      }
      // movement
      playerKingMove(1, 1, -1, 1)
    } // end of king
    else if (player == "playerTwo") {

      // jumping
      if (event.target.className == "playerOne") {

        //jumping
        playerJump(1, 1, 2, 2)
        turnFunction(2);
        playerChange(1);

        playerJump(-1, 1, -2, 2)
        turnFunction(2);
        playerChange(1);
      }

      // movement
      playerTwoMove(1, 1, -1, 1);


    } else if (player == "playerOne") {

      //jumping
      if (event.target.className == "playerTwo") {
        playerJump(1, -1, 2, -2);
        turnFunction(1);
        playerChange(0);

        playerJump(-1, -1, -2, -2)
        turnFunction(1);
        playerChange(0);
      }
      // movement
      playerOneMove(1, 1, -1, 1);
    }

  } else if (event.target.nodeName != 'DIV') {
    firstX = x;
    firstY = y;

      if ((event.target.className == 'playerTwo') && (turn == 2)) {
        player = 'playerTwo';
        event.target.setAttribute('id', 'clicked');
      } else if ((event.target.className == 'playerOne') && (turn == 1)) {
        player = 'playerOne';
        event.target.setAttribute('id', 'clicked');
      }
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
        piece.appendChild(document.createTextNode(" "))
        piece.setAttribute('class', 'playerOne')
        square.appendChild(piece);
      } else if ((((y == 5) || (y == 7)) && (x % 2 != 0)) || ((y == 6) && (x % 2 == 0))) {
        piece.appendChild(document.createTextNode(" "))
        piece.setAttribute('class', 'playerTwo')
        square.appendChild(piece);
      }
      board.appendChild(square);
    }
  }
  playerChange(1);
}
startGame();
