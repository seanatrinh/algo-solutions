// https://leetcode.com/problems/container-with-most-water/submissions/
var maxArea = function(height) {
  if (height.length < 2) return 0;
  if (!height) return null;

  let max = -Infinity;
  let l = 0;
  let r = height.length - 1;

  while (r > l) {
      let b = r - l;
      let h = Math.min(height[l], height[r]);
      let a = b * h;

      max = Math.max(max, a);

      if (height[l] < height[r]) {
          l++;
      } else {
          r--;
      }
  }
  return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7])); //49