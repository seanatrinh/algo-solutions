// https://leetcode.com/problems/product-of-array-except-self/
var productExceptSelf = function(nums) {
  let result = [];

  let pre = 1;

  for (let i = 0; i < nums.length; i++) {
      result.push(pre);
      pre = pre * nums[i];
  }

  let post = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
      result[i] = result[i] * post;
      post = post * nums[i];
  }

  return result;

};