// https://leetcode.com/problems/product-of-array-except-self/
// o(n) time o(1) space
var productExceptSelf = function(nums) {
  let result = [];

  let pre = 1;

  // populate prefix first: prefix starts with 1 since the number before index 0 doesn't exist
  // every number after, we update the closure by multiplying it by the current number
  for (let i = 0; i < nums.length; i++) {
      result.push(pre);
      pre = pre * nums[i];
  }

  let post = 1;

  // next, populate the result array by iterating backwards
  // we're multiplying pre by post, updating the post as we go
  for (let i = nums.length - 1; i >= 0; i--) {
      result[i] = result[i] * post;
      post = post * nums[i];
  }

  return result;

};

// console.log(productExceptSelf([1,2,3,4])); //[24,12,8,6]

// o(n) time, o(n) space
var productExceptSelf = function(nums) {
  let result = [];
  let pre = new Array(nums.length).fill(0);
  let post = new Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      pre[i] = 1;
    } else {
      pre[i] = pre[i - 1] * nums[i];
    }
  }

  for (let j = nums.length - 1; j >= 0; j--) {
    if (j === nums.length - 1) {
      post[j] = nums[j];
    } else {
      post[j] = post[j + 1] * nums[j];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      result.push(post[i + 1]);
    } else if (i === nums.length - 1) {
      result.push(pre[i - 1]);
    } else {
      result.push(pre[i - 1] * post[i + 1]);
    }
  }

  return result;
}

console.log(productExceptSelf([1,2,3,4])); //[24,12,8,6]