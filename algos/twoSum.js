/*
approach
- On^2: double loop and see if we can find targetSum
- On: use an object to store the difference between current num and targetsum:current num.
  - if we find that difference again, we can return [obj[currentNum], currentNum]
*/
function twoNumberSum(array, targetSum) {
  let seen = {};

  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];
    let diff = targetSum - currentNum;

    if (seen[currentNum]) {
      return [currentNum, seen[currentNum]];
    }
    seen[diff] = currentNum;
  }
  return [];
}