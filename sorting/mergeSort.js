function merge(array1, array2) {
  let i = 0;
  let j = 0;
  let result = [];

  while (i < array1.length || j < array2.length) {
    if (array1[i] <= array2[j]) {
      result.push(array1[i]);
      i++;
    } else if (array1[i] > array2[j]) {
      result.push(array2[j]);
      j++;
    } else if (array2[j] === undefined) {
      result.push(array1[i]);
      i++;
    } else if (array1[i] === undefined) {
      result.push(array2[j]);
      j++;
    }
  }
  return result;
}

function mergeSort(array) {
  if (array.length <= 1) return array;

  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid, array.length));

  return merge(left, right);
}

console.log(mergeSort([2,0,2,1,1,0]));