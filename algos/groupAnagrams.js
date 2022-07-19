/*
https://leetcode.com/problems/group-anagrams/
approach:
- iterate over strs array
    - iterate over each letter of str
        - create an array of 26 values
        - fill this array with each char in the str
        - create a key in an object with value of [] and push to it
- return object values
*/
var groupAnagrams = function(strs) {
  let result = {};

  for (str of strs) {
      let charCount = new Array(26).fill(0);
      for (char of str) {
          charCount[char.charCodeAt() - 'a'.charCodeAt()] += 1;
      }
      let charHash = charCount.join('#');

      result[charHash] === undefined ? result[charHash] = [str] : result[charHash].push(str);
  }

  return Object.values(result);
};