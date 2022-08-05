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
    dfs(i + 1); // if input array is [1,2,3], then [1,2,3] will be generated first
    // don't include nums[i];
    subset.pop(); // then 3 will be popped, and [1, 2] will be generated
    dfs(i + 1);
  }
  dfs(0);

  return res;
}

/*
[1,2,3]

dfs(0)
[1]
dfs(1) **
[1, 2]
dfs(2) *
[1, 2, 3]
dfs(3) => push [1, 2, 3], return
pop 3, subset is now => [1, 2]
dfs(3) => push [1, 2], return
* come back to EC on line 30
pop 2, subset is now => [1]
dfs(3) => push [1], return
** come back to EC on line 28
pop 1, subset is now => []
dfs(2)
[3]

*/
debugger;
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