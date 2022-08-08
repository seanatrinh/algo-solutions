/*
Things to consider:
- Ask questions to clarify and let interviewer know you understand the problem before coding
- Explain the concept how it is DP = min(max(..,..,..), self)
- Space optimization, tell the interviewer the observation it just depends on prev column result.
Sometimes, the interviewer will say "all values greater than X" or "the area is flooding with water".
This just means that you have an additional constraint that value > x.

2-d array of "sharpness" values. Find the path from left to right which has the highest minimum sharpness.
The path must be from left to right, with a starting point, and then each time you have to jump up to the right, right or down. That is to say, the path length is the number of columns n, assuming the path is (i1,1),(i2,2),...,(in,n), the path must satisfy each pair of ik and i{k-1} Distance cannot be greater than 1
*/

function sharpnessValue(matrix) {
  if (matrix === null || matrix.length < 1) return -1;
  let rows = matrix.length;
  let cols = matrix[0].length;

  // this column will hold the previous sharpness values
  let sharpness_column = new Array(rows).fill(-1);

  for (let r = 0; r < rows; r++) {
    sharpness_column[r] = matrix[r][0];
  }

  for (let c = 1; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      let prev_sharpness = sharpness_column[r];

      if (r > 0) {
        prev_sharpness = Math.max(prev_sharpness, sharpness_column[r - 1]);
      }
      if (r < rows - 1) {
        prev_sharpness = Math.max(prev_sharpness, sharpness_column[r + 1]);
      }
      sharpness_column[r] = Math.max(prev_sharpness, matrix[r][c]);
    }
  }

  let min = Infinity;
  for (const value of sharpness_column) {
    min = Math.min(min, value);
  }

  return min;
}

function sharpnessValue2 (matrix) {
  if (matrix === null || matrix.length === 0) return 0;

  let rows = matrix.length;
  let cols = matrix[0].length;
  let answer = 0;

  for (let c = 1; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      let t = matrix[r][c];
      if (r - 1) {
        t = Math.max(t, matrix[r - 1][c]);
      }
      if (r + 1 < rows) {
        t = Math.max(t, matrix[r + 1][c]);
      }
      matrix[r][c] = Math.min(matrix[r][c], t);

      if (c === cols - 1) {
        answer = Math.max(answer, matrix[r][c]);
      }
    }
  }

  return answer;
}

let test_a = [[1], [2], [3]];
console.log(sharpnessValue2(test_a)); // 3

let test_b = [[1, 2, 3]];
console.log(sharpnessValue2(test_b)); // 1

let test_c = [[3]];
console.log(sharpnessValue2(test_c)); // 3

let test_d = [
  [5, 7, 2],
  [7, 5, 8],
  [9, 1, 5]
];
console.log(sharpnessValue2(test_d)); // ?

