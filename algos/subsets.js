// backtracking
function subsets(nums) {
  let res = [];

  let subset = [];
  let dfs = (i) => {
    if (i >= nums.length) {
      res.push([...subset]);
      return;
    }
    // include nums[i]
    subset.push(nums[i]);
    dfs(i + 1);
    // don't include nums[i];
    subset.pop();
    dfs(i + 1);
  }
  dfs(0);

  return res;
}

console.log(subsets([1,2,3]))

// dfs, no backtracking
var subsetss = function(nums) {
  let result = [];

  let dfs = (idx, subset) => {
      if (idx === nums.length) {
          result.push([...subset]);
          return;
      }

      dfs(idx + 1, [...subset, nums[idx]]);
      dfs(idx + 1, [...subset]);
  }
  dfs(0, []);
  return result;
};