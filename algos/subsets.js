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