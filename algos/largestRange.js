function largestRange(array) {
  let bestRange = [];
  let longestLength = 0;
  const nums = {};
  for (const num of array) {
    nums[num] = true;
  }
  for (const num of array) {
    if (!nums[num]) continue;
    nums[num] = false;
    let currentLength = 1;
    let left = num - 1;
    let right = num + 1;
    while (left in nums) {
      nums[left] = false;
      currentLength++;
      left--;
    }
    while (right in nums) {
      nums[right] = false;
      currentLength++;
      right++;
    }

    if (currentLength > longestLength) {
      longestLength = currentLength;
      // why left + 1 and right - 1? well, look at the while loop
      // while left is in nums we decrement
      // while right is in nums we increment
      // when we stop the loop, we're at a point where the value we
      // incremented/decremened to is the value thats not in the range.
      bestRange = [left + 1, right - 1];
    }
  }
  return bestRange;
}

let test1 = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]; // [0, 7]
let test2 = [1, 1, 1, 3, 4]; // [3, 4]
