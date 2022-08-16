var slidingPuzzle = function(board) {
  let queue = [];
  let seen = {};
  let start = generateString(board);
  queue.push(board);
  seen[start] = true;

  let moves = 0;

  while (queue.length) {
      let queueSnapshot = queue.length;
      for (let i = 0; i < queueSnapshot; i++) {
          let firstOut = queue.shift();

          let firstOutStringified = generateString(firstOut);
          if (firstOutStringified === '123450') return moves;

          let potentials = generatePotentialBoards(firstOut);
          for (const potentialBoard of potentials) {
              let stringifiedBoard = generateString(potentialBoard);
              if (!(stringifiedBoard in seen)) {
                  queue.push(potentialBoard);
                  seen[stringifiedBoard] = true;
              }
          }
      }
      moves++;
  }
  return -1;

};

function generatePotentialBoards(board) {
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  let potentialBoards = [];

  for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[r].length; c++) {
          if (board[r][c] === 0) {
              for (const [x, y] of directions) {
                  let newRow = r + x;
                  let newCol = c + y;

                  if (newRow >= 0 && newCol >= 0 && newRow < board.length && newCol < board[0].length) {
                      let boardCopy = board.map(arr => arr.slice());

                      let temp = board[newRow][newCol];
                      boardCopy[newRow][newCol] = 0;
                      boardCopy[r][c] = temp;
                      potentialBoards.push(boardCopy);
                  }
              }
          }
      }
  }
  return potentialBoards;
}

function generateString(board) {
  let res = '';
  for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[r].length; c++) {
          res += board[r][c].toString();
      }
  }
  return res;
}