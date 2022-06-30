var searchMatrix = function(matrix, target) {
    let ROWS = matrix.length;
    let COLS = matrix[0].length;

    let top = 0;
    let bot = ROWS - 1;
    let row;
    while (top <= bot) {
      row = Math.floor((top + bot) / 2);
      if (target > matrix[row][COLS -1]) {
        top = row + 1;
      } else if (target < matrix[row][0]) {
        bot = row - 1;
      } else {
        break;
      }
    }

    if (top > bot) return false;

    let l = 0;
    let r = COLS - 1;
    let mid;
    row = Math.floor((top + bot) / 2);

    while (l <= r) {
      mid = Math.floor((l + r) / 2);
      if (target > matrix[row][mid]) {
        l = mid + 1;
      } else if (target < matrix[row][mid]) {
        r = mid - 1;
      } else {
        return true;
      }
    }
    return false;
};