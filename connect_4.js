var page = document.getElementById("Page");

function display(text) {
  page.innerHTML = text;
}

function append(text) {
  display(page.innerHTML + text);
}

// Make the board
var board = [[],[],[],[]];

for (var row = 0; row < 4; row++){
  for (var col = 0; col < 4; col++){
    board[row][col] = 0;
  }
}

// Display board onscreen
function show_board (){
  result = "";
  for (var row = 0; row < 4; row++){
    if (row > 0) {
      result = result + "\n";
    }
    for (var col = 0; col < 4; col++){
      result = result + board[row][col];
    }
  }
  display (result);
}

// Drop a peice in a column.
function drop_piece(col, pNum){
  for (var row = 0; row < 4; row++){
    if (board[row][col]>0){
      if (row < 1 ){
        console.log("Invalid Move");
        break;
      }
      else{
        board [row-1][col] = pNum;
        console.log("Found it");
        break;
      }
    }
    if (row === 3 && board[row][col] === 0){
      board[row][col] = pNum;
      console.log("Found it");
      break;
    }
  }
}

// Moves in "game"
drop_piece(0, 2);
drop_piece(1, 1);
drop_piece(3, 2);
drop_piece(1, 1);
drop_piece(2, 2);
show_board();
