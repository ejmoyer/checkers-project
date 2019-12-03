let board = document.getElementsByClassName('board')[0];

for (let x = 0; x < 8; x++) {
  let rowDiv = document.createElement('div')
  rowDiv.setAttribute('class', 'space')
  board.appendChild(rowDiv);
  for (let y = 0; y < 7; y++) {
    let columnDiv = document.createElement('div')
    columnDiv.setAttribute('class', 'space')
    if ((x + y) % 2 == 0) {
      columnDiv.style.background = "red";
      rowDiv.style.background = "black";
    } else {
      columnDiv.style.background = "black";
      rowDiv.style.background = "red";
    }
    board.appendChild(columnDiv);
  }
}
