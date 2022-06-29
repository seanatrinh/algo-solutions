// https://leetcode.com/problems/top-k-frequent-elements/
// O(n logn) time(because of sorting), O(n) space
var topKFrequent = function(nums, k) {
  let freqMap = {};

  for (const num of nums) {
      if (freqMap[num] === undefined) {
          freqMap[num] = 1;
      } else {
          freqMap[num] += 1;
      }
  }

  let freqArray = [];

  for (const num in freqMap) {
      freqArray.push([Number(num), Number(freqMap[num])]);
  }

  freqArray.sort((a, b) => b[1] - a[1]);

  let result = [];

  for (let i = 0; i < k; i++) {
      result.push(freqArray[i][0]);
  }

  return result;
};

// O(n) time O(n) space
var topKFrequent = function(nums, k) {
  let count = {};
    // freq needs to be length + 1, because each index represents count, and there will be no numbers with a count of 0
  let freq = new Array(nums.length + 1).fill([]);

  for (const n of nums) {
    if (count[n] === undefined) {
      count[n] = 1;
    } else {
      count[n] += 1;
    }
  }

  for (const n in count) {

    // freq[count[n]] = freq[count[n]].push(n);
      // not sure why, but above doesn't work. need to make a shallow copy
      freq[count[n]] = [...freq[count[n]], n];
  }


  let res = [];

  for (let i = freq.length - 1; i >= 0; i--) {
    res = res.concat(freq[i]);

    if (res.length === k) return res;
  }
}