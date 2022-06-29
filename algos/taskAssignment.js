/*
problem:

inputs:
outputs:
edge cases:

example:


approach:

*/

function taskAssignment(k, tasks) {
  if (k <= 0 || tasks.length !== k * 2) return [];

  let tasksIndexMeta = tasks.map((task, i) => { return {task: task, index: i}});
  tasksIndexMeta.sort((a, b) => a.task - b.task);

  let result = [];

  let l = 0;
  let r = tasksIndexMeta.length - 1;

  while (l < r) {
    result.push([tasksIndexMeta[l].index, tasksIndexMeta[r].index]);
    l++;
    r--;
  }

  return result;
}

// Test cases
let test1 = {
  "k": 3,
  "tasks": [1, 3, 5, 3, 1, 4]
};

console.log(taskAssignment(test1.k, test1.tasks));
