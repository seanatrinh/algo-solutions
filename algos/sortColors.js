/*
https://leetcode.com/problems/sort-colors/

create a left, mid, and right pointer
  left and mid start at 0
  right starts at the end

create a basic swap function

while mid <= right (need the equals, because there can be instances where the pointers are the same but the swap still needs to happen)
  if num is 0
    swap mid, left then increment mid and left
  if num is 1
    increment mid
  if num is 2
    swap mid, right then decrement right
*/

var sortColors = function(nums) {
  let left = 0;
  let mid = 0;
  let right = nums.length - 1;

  let swap = (a, b) => {
      [nums[a], nums[b]] = [nums[b], nums[a]];
  }

  while (mid <= right) {
      if (nums[mid] === 0) {
          swap(left, mid);
          left++;
          mid++;
      } else if (nums[mid] === 1) {
          mid++;
      } else if (nums[mid] === 2) {
          swap(mid, right);
          right--;
      }
  }
};