/*
https://leetcode.com/problems/permutation-in-string/
edge case: check if s1 is longer than s2

create a letterMap for s1 (a - z)
create a letterMap for s2 (a - z)

populate letterMap for s1

set a left and a right pointer
advance right pointer s1 length times, and populate letterMap for s2

create a 'matches' variable that starts at 26

compare s1 letterMap and s2 letterMap and decrement 'matches' when the letters don't match up

while right pointer is not at the end
    if matches === 26 return true

    remove current left from letterMap
    update 'matches' as necessary
    increment left pointer

    increment right pointer
    add new right to letterMap
    update 'matches' as necessary

return false

Time Complexity: O(n) Space Complexity: O(n) ?
*/
var checkInclusion = function(s1, s2) {
  // edge case: if s1 length is greater than s2 length, there cannot be a permutation of s1 in s2
  if (s1.length > s2.length) return false;

  // create empty letter maps for s1 and s2
  let letterMap1 = {a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0};
  let letterMap2 = {a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0};
  // create a matches variable; initially it'll be 26 since letterMap1 and 2 are equivalent
  let matches = 26;

  // populate s1 map and s2 map with respective letters, for the length of s1
  for (let i = 0; i < s1.length; i++) {
      const s1Letter = s1[i];
      const s2Letter = s2[i];
      letterMap1[s1Letter] += 1;
      letterMap2[s2Letter] += 1;
  }

  // decrement matches where letterMap1's letter count doesn't match letterMap2
  for (const letter in letterMap1) {
      if (letterMap1[letter] !== letterMap2[letter]) {
          matches -= 1;
      }
  }

  // create a left and right pointer
  let left = 0;
  let right = s1.length - 1;

  // loop until the right pointer has reached the end of s2
  while (right < s2.length) {
      if (matches === 26) return true;

      // advance left pointer, and decrement letterMap2 at the letter that is leaving the sliding window
      let leftLetter = s2[left];
      letterMap2[leftLetter] -= 1;
      left += 1;

      // if letterMaps at left letter that was just removed is equivalent, increase matches
      if (letterMap1[leftLetter] === letterMap2[leftLetter]) {
          matches += 1;
      // otherwise decrease matches if they WERE equivalent, and we just made them unequivalent
      // this was tricky for me to think of, but its pretty simple -- reverse the operation we just did
      } else if (letterMap1[leftLetter] === letterMap2[leftLetter] + 1) {
          matches -= 1;
      }

      // advance right pointer, and increment letterMap2 at the new letter introduced to the sliding window
      right += 1;
      let rightLetter = s2[right];
      letterMap2[rightLetter] += 1;

      // if letterMaps at new right letter is equivalent, increase matches
      if (letterMap1[rightLetter] === letterMap2[rightLetter]) {
          matches += 1;
      // otherwise decrease matches if they WERE equivalent (check by reversing the right letter incrementing we just did)
      } else if (letterMap1[rightLetter] === letterMap2[rightLetter] - 1){
        matches -= 1;
      }
  }
  // if we never return true from the sliding window, there are no permutations and we should return false
  return false;
};