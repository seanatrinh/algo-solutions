/*
brute force
    look at every single subarray, calculate the product, and get the max
    time complexity: O(n ^ 2)

patterns?
    what if all positive elements?
        1, 2, 3
        if we have positive nums, no matter what happens, we want the product of all the numbers

    what if all negative numbers?
        -1, -2, -3

        -1 x -2 x -3 => -6
        -2 x -3 => 6

        if we want to find the max product subarray of negative numbers
            find max product subarray of first two elements
            then use this, to get the entire max product subarray

        -1, -2, -3

        ** MAINTAIN MAX AND MINIMUM **

        max product subarray: -1 * -2 = 2
        min product subarray: -1, -2 = -2

        look at -1, -2
            max: 2
            min: -2
        add -3
            -3 * prevMax = -6
            -3 * prevMin = 6
        add -4
            -4 * 6 = -24
            -4 * -6 = 24
*/
var maxProduct = function(nums) {
  // this will take care of nums length 0
  let result = maxInArray(nums);
  let curMin = 1;
  let curMax = 1;

  for (const n of nums) {
      let temp = curMax * n;
      curMax = Math.max(n * curMax, n * curMin, n);
      curMin = Math.min(temp, n * curMin, n);
      result = Math.max(result, curMax, curMin);
  }
  return result;
}

function maxInArray(array) {
  let result = -Infinity;

  for (const num of array) {
      result = Math.max(result, num);
  }

  return result;
}