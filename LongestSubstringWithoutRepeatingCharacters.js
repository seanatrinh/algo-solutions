// https://leetcode.com/problems/longest-substring-without-repeating-characters/

function longestSubstringWithoutRepeatingCharacters(s) {
  let seen = {};
  let l = 0;
  let res = 0;

  for (let r = 0; r < s.length; r++) {
    if (seen[s[r]] !== undefined) {
      l = Math.max(seen[s[r]] + 1, l);
    }

    seen[s[r]] = r;
    res = Math.max(res, (r - l + 1));
  }
  return res;
}

// tests

let test1 = 'abcba';
console.log(longestSubstringWithoutRepeatingCharacters(test1)); // 3
let test2 = 'pwwkew';
console.log(longestSubstringWithoutRepeatingCharacters(test2)); // 3