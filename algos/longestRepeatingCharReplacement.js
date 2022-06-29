// https://leetcode.com/problems/longest-repeating-character-replacement/
var characterReplacement = function(s, k) {
  let count = {};
  let result = 0;
  let l = 0;

  for (let r = 0; r < s.length; r++) {
      // populate count map
      if (count[s[r]] === undefined) {
          count[s[r]] = 1;
      } else {
          count[s[r]] += 1;
      }

      // make sure current window is valid
      // if current window is not valid (window length - highest frequency value in count map) greater than replacements allowed (k)
      if (((r - l + 1) - getMaxValue(count)) > k) {
          count[s[l]] -= 1;
          l += 1;
      }

      // result is max of current window or preveious result
      result = Math.max(r - l + 1, result);
  }
  return result;
};

function getMaxValue(object) {
  let max = 0;

  for (const key in object) {
      max = Math.max(max, object[key]);
  }

  return max;
}