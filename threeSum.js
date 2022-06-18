/*
problem: Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.
The function should find all triplets in the array that sum up to the target sum and return a two-dimensional
array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets
themselves should be ordered in ascending order with respect to the numbers they hold.

If no three numbers sum up to the target sum, the function should return an empty array

inputs: array of integers (clarify the integer part)
outputs: array of arrays containing triplets that sum to targetSum
edge cases:
- empty array, null array
- target sum not an integer (?)

example:
let test1 = {
  "array": [12, 3, 1, 2, -6, 5, -8, 6],
  "targetSum": 0
};

-8, -6, 1,  2, 3,  5, 6, 12
i    l                   r

example output: [[-8, 2, 6], [-8, 3, 5], [-6, 1 ,5]];

approach:
- sort the input array, this helps us come to conculsions more quickly
- iterate over the array
  - keep track of current number & the difference between that and targetSum
  - set pointer 2 & 3
    - if they add up to 0, push to result
    - otherwise move the pointers
- return result

complexity:
time: O(n^2)
space: O(n)
*/

function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);

  let result = [];

  for (let i = 0; i < array.length; i++) {
    let l = i + 1;
    let r = array.length - 1;

    while (l < r) {
      let sum = array[l] + array[r];
      let difference = targetSum - array[i];

      if (sum < difference) {
        l++;
      } else if (sum > difference) {
        r--;
      } else if (sum === difference) {
        result.push([array[i], array[l], array[r]]);
        l++;
        r--;
      }
    }
  }
  return result;
}

// Test cases
let test1 = {
  "array": [12, 3, 1, 2, -6, 5, -8, 6],
  "targetSum": 0
}

console.log(threeNumberSum(test1.array, test1.targetSum));

