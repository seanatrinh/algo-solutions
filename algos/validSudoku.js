// first attempt - works but its O(3 * 81) time
var isValidSudoku = function(board) {
  if (validateRows(board) && validateCols(board) && validateSubBoxes(board)) {
      return true;
  } else {
      return false;
  }
};

function validateRows(board) {
  let validateRow = function(row) {
      let map = {};

      for (const val of row) {
        if (map[val] === undefined && val !== '.') {
          map[val] = 1;
        } else if (map[val] !== undefined && val !== '.'){
          return false;
        }
      }
      return true;
  }

  for (let r = 0; r < board.length; r++) {
      if (!validateRow(board[r])) return false;
  }
  return true;
}

function validateCols(board) {
  let validateCol = function(col) {
    let map = {};

    for (let row = 0; row < board.length; row++) {
      let val = board[row][col];

      if (map[val] === undefined && val !== '.') {
        map[val] = 1;
      } else if (map[val] !== undefined && val !== '.') {
        return false;
      }
    }
    return true;
  }

  for (let c = 0; c < board[0].length; c++) {
    if (!validateCol(c)) return false;
  }
  return true;
}
/*
0 1 2, 3 4 5, 6 7 8
*/
function validateSubBoxes(board) {
  let validateSubBox = function(startRow, endRow, startCol, endCol) {
    let map = {};
    for (let r = startRow; r <= endRow; r++) {
      for (let c = startCol; c <= endCol; c++) {
        let val = board[r][c];

        if (map[val] === undefined && val !== '.') {
          map[val] = 1;
        } else if (map[val] !== undefined && val !== '.') {
          return false;
        }
      }
    }
    return true;
  }

  if (
    validateSubBox(0, 2, 0 ,2) && validateSubBox(0, 2, 3, 5) && validateSubBox(0 ,2, 6, 8) &&
    validateSubBox(3, 5, 0 ,2) && validateSubBox(3, 5, 3, 5) && validateSubBox(3 ,5, 6, 8) &&
    validateSubBox(6, 8, 0 ,2) && validateSubBox(6, 8, 3, 5) && validateSubBox(6 ,8, 6, 8)
  ) {
    return true;
  } else {
    return false;
  }
}

let board =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];
// console.log(isValidSudoku(board));

let board2 = [
  [".",".",".",".","5",".",".","1","."],
  [".","4",".","3",".",".",".",".","."],
  [".",".",".",".",".","3",".",".","1"],
  ["8",".",".",".",".",".",".","2","."],
  [".",".","2",".","7",".",".",".","."],
  [".","1","5",".",".",".",".",".","."],
  [".",".",".",".",".","2",".",".","."],
  [".","2",".","9",".",".",".",".","."],
  [".",".","4",".",".",".",".",".","."]];
  // console.log(isValidSudoku(board2));

  // second attempt - O(81) time

  var isValidSudoku2 = function(board) {
    let cols = {};
    let rows = {};
    let squares = {}; // key = r/3,c/3

    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (board[r][c] === '.') continue;

        let convertRow = Math.floor(r/3);
        let convertCol = Math.floor(c/3);
        let squareHash = `${convertRow}#${convertCol}`

        if (isItemInArray(board[r][c], rows[r]) || isItemInArray(board[r][c], cols[c]) || isItemInArray(board[r][c], squares[squareHash])) return false;
        cols[c] === undefined ? cols[c] = [board[r][c]] : cols[c] = [...cols[c], board[r][c]];
        rows[r] === undefined ? rows[r] = [board[r][c]] : rows[r] = [...rows[r], board[r][c]];
        squares[squareHash] === undefined ? squares[squareHash] = [board[r][c]] : squares[squareHash] = [...squares[squareHash], board[r][c]];
      }
    }
    return true;
  }

  function isItemInArray(item, array) {
    if (!Array.isArray(array)) return false;

    for (const val of array) {
      if (item === val) return true;
    }
    return false;
  }

console.log(isValidSudoku2(board));
console.log(isValidSudoku2(board2));