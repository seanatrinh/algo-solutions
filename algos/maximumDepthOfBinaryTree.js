// https://leetcode.com/problems/maximum-depth-of-binary-tree/
var maxDepth = function(root) {
  if (!root) return [];

  let queue = [root];
  let depth = 0;

  while (queue.length) {
      let queueSnapshot = queue.length;
      depth += 1;
      for (let i = 0; i < queueSnapshot; i++) {
          let firstOut = queue.shift();
          if (firstOut.left !== null) queue.push(firstOut.left);
          if (firstOut.right !== null) queue.push(firstOut.right);
      }
  }

  return depth;
};