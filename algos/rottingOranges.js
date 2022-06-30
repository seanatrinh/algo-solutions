// https://leetcode.com/problems/rotting-oranges/
var orangesRotting = function(grid) {
  let queue = [];
  let time = 0;
  let fresh = 0;
  let ROWS = grid.length;
  let COLS = grid[0].length;

  // loop through the grid to get a count of fresh oranges & push rotten oranges at time 0 into the queue
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c] === 1) {
        fresh += 1;
      }
      if (grid[r][c] === 2) {
        queue.push([r, c]);
      }
    }
  }

  const DIRECTIONS = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  // while there are rotten oranges in the queue & there are fresh oranges to be converted...
  while (queue.length !== 0 && fresh > 0) {
    // take a snapshot of the queue length to iterate through the rotten oranges in a timeframe
    let queueLengthSnapshot = queue.length;
    for (let i = 0; i < queueLengthSnapshot; i++) {
      const [row, col] = queue.shift();

      for (const [x, y] of DIRECTIONS) {
        let newRow = row + x;
        let newCol = col + y;

        if (newRow < 0 || newRow >= ROWS || newCol < 0 || newCol >= COLS || grid[newRow][newCol] !== 1) {
          continue;
        }
        // convert fresh oranges to rotten, decrement the fresh orange counter, and push to queue
        grid[newRow][newCol] = 2;
        fresh -= 1;
        queue.push([newRow, newCol]);
      }
    }
    // increment time after each rotten orange in the snapshot has been dequeued
    time += 1;
  }
  // if there are no fresh oranges left, return time, otherwise return -1
  return fresh === 0 ? time : -1;
};