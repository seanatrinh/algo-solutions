function jumpGame2(array) {
  if (array.length <= 1) return 0;

  let jumps = 0;
  let steps = array[0];
  let maxSteps = array[0];

  for (let i = 1; i < array.length - 1; i++) {
    steps--;
    maxSteps = Math.max(maxSteps, i + array[i]);

    if (steps === 0) {
      steps = maxSteps - i;
      jumps++;
    }
  }


  return jumps + 1;
}

// tests

const test1 = [2, 3, 1, 1, 4];
console.log(jumpGame2(test1)); // 2