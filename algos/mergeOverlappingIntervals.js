function mergeOverlappingIntervals(array) {
  if (array.length === 0) return [];

  let result = [];

  array.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < array.length; i++) {
    let currentInterval = array[i];

    if (result.length === 0) {
      result.push(array[i]);
    } else {
      let potentialMerge = result[result.length - 1];

      if (currentInterval[0] <= potentialMerge[1] && currentInterval[1] >= potentialMerge[1]) {
        potentialMerge[1] = currentInterval[1];
      } else if (currentInterval[0] > potentialMerge[1]) {
        result.push(currentInterval);
      }
    }
  }

  return result;
}

let test1 = [
  [1, 2],
  [3, 5],
  [4, 7],
  [6, 8],
  [9, 10]
];

console.log(mergeOverlappingIntervals(test1));

let test2 = [
  [100, 105],
  [1, 104]
];

console.log(mergeOverlappingIntervals(test2));