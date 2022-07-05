// https://leetcode.com/problems/longest-consecutive-sequence/

var longestConsecutive = function(nums) {
  let numSet = new Set(nums);
  let sequenceLength = 0;

  for (const num of numSet) {
      if (numSet.has(num - 1)) continue;

      let next = num + 1;
      let currentSequenceLength = 1;

      while (numSet.has(next)) {
          next += 1;
          currentSequenceLength += 1;
      }
      sequenceLength = Math.max(sequenceLength, currentSequenceLength);
  }
  return sequenceLength;
};

let test1 = [100,4,200,1,3,2];
console.log(longestConsecutive(test1)); // 4