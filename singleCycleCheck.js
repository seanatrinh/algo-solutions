function hasSingleCycle(array) {
  let visited = new Array(array.length).fill(false);

  let dfs = function(array, index) {
    if (index === 0 && visited[index]) {
      finishOnLastIndex = true;
      return;
    }

    if (visited[index] === false) {
      visited[index] = true;
    } else {
      finishOnLastIndex = false;
      return;
    }

    let indexToCycleTo = array[index] + index;

    if (indexToCycleTo > array.length - 1) {
      while (indexToCycleTo > array.length - 1) {
        indexToCycleTo -= array.length;
      }
      dfs(array, indexToCycleTo);
    } else if (indexToCycleTo < 0) {
      while (indexToCycleTo < 0) {
        indexToCycleTo += array.length;
      }
      dfs(array, indexToCycleTo);
    } else {
      indexToCycleTo = array[index] + index;
      dfs(array, indexToCycleTo);
    }

  }

  let finishOnLastIndex;
  dfs(array, 0);

  if (finishOnLastIndex) {
    for (const status of visited) {
      if (status === false) return false;
    }
    return true;
  } else {
    return false;
  }
}

console.log(hasSingleCycle([2, 3, 1, -4, -4, 2])); // true
debugger;
console.log(hasSingleCycle([1, 2, 3, 4, -2, 3, 7, 8, -26])); // true