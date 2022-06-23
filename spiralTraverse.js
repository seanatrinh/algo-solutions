/*
input: n x m matrix
output: array of integers
edge cases:
- null array, array length 0

approach:
- traverse border and push to result array
*/
function spiralTraverse(array) {
  let result = [];
  let top = 0;
  let right = array[0].length - 1;
  let bottom = array.length - 1;
  let left = 0;

  while (result.length < (array.length * array[0].length)) {
    // top
    for (let c = left; c <= right; c++) {
      result.push(array[top][c]);
    }

    // right
    for (let r = top + 1; r <= bottom; r++) {
      result.push(array[r][right]);
    }

    // bottom
    for (let c = right - 1; c >= left; c--) {
      if (top === bottom) break;
      result.push(array[bottom][c]);
    }

    // left
    for (let r = bottom - 1; r > top; r--) {
      if (left === right) break;
      result.push(array[r][left]);
    }


    top++;
    left++;
    bottom--;
    right--;
  }


  return result;
}
