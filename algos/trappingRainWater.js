// https://leetcode.com/problems/trapping-rain-water/submissions/
// O(1) time, O(n) space
var trap = function(height) {
  let maxLeft = 0;
  let maxLeftArray = new Array(height.length).fill(0);

  for (let i = 1; i < height.length; i++) {
      maxLeft = Math.max(maxLeft, height[i - 1]);

      maxLeftArray[i] = maxLeft;
  }

  let maxRight = 0;
  let maxRightArray = new Array(height.length).fill(0);

  for (let i = height.length - 2; i >= 0; i--) {
      maxRight = Math.max(maxRight, height[i + 1]);

      maxRightArray[i] = maxRight;
  }

  let result = 0;

  for (let i = 0; i < height.length; i++) {
      let waterToAdd = Math.min(maxLeftArray[i], maxRightArray[i]) - height[i];

      if (waterToAdd > 0) result += waterToAdd;
  }

  return result;
};

// O(1) time, O(1) space
var trap = function(height) {
  let left = 0;
  let right = height.length - 1;
  let maxLeft = height[left];
  let maxRight = height[right];
  let res = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      left++;
      maxLeft = Math.max(maxLeft, height[left]);
      let leftAdd = Math.min(maxLeft, maxRight) - height[left];

      if (leftAdd > 0) {
        res += leftAdd;
      }

    } else {
      right--;
      maxRight = Math.max(maxRight, height[right]);
      let rightAdd = Math.min(maxRight, maxLeft) - height[right];

      if (rightAdd > 0) {
        res += rightAdd;
      }
    }
  }
  return res;
}