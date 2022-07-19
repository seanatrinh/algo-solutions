/*
  Write a function that takes in an array of at least two integers and that
  returns an array of the starting and ending indices of the smallest subarray
  in the input array that needs to be sorted in place in order for the entire
  input array to be sorted (in ascending order).


  If the input array is already sorted, the function should return [-1, -1]

  [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19] => [3, 9]
*/

function subarraySort(array) {
  let minUnsorted = Infinity;
  let maxUnsorted = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (idxIsOutOfOrder(i, array)) {
      minUnsorted = Math.min(array[i], minUnsorted);
      maxUnsorted = Math.max(array[i], maxUnsorted);
    }
  }

  if (minUnsorted === Infinity) return [-1, -1];

  let res = [null, null];
  for (let l = 0; l < array.length; l++) {
    if (minUnsorted < array[l]) {
      res[0] = l;
      break;
    }
  }
  for (let r = array.length - 1; r >= 0; r--) {
    if (maxUnsorted > array[r]) {
      res[1] = r;
      break;
    }
  }
  return res;
}

function idxIsOutOfOrder(i, array) {
  let num = array[i];
  if (i === 0) return num > array[i + 1];
  if (i === array.length - 1) return num < array[i - 1];
  return num > array[i + 1] || num < array[i - 1];
}