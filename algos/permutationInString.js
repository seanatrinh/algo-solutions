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

*/
var checkInclusion = function(s1, s2) {
  if (s1.length > s2.length) return false;

  let letterMap1 = {a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0};
  let letterMap2 = {a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0};
  let matches = 26;

  for (const letter of s1) {
      letterMap1[letter] += 1;
  }

  for (let i = 0; i < s1.length; i++) {
      const letter = s2[i];
      letterMap2[letter] += 1;
  }

  for (const letter in letterMap1) {
      if (letterMap1[letter] !== letterMap2[letter]) {
          matches -= 1;
      }
  }

  let left = 0;
  let right = s1.length - 1;

  while (right < s2.length) {
      if (matches === 26) return true;

      let leftLetter = s2[left];

      letterMap2[leftLetter] -= 1;
      left += 1;

      if (letterMap1[leftLetter] === letterMap2[leftLetter]) {
          matches += 1;
      } else if (letterMap1[leftLetter] === letterMap2[leftLetter] + 1) {
          matches -= 1;
      }

      right += 1;
      let rightLetter = s2[right];

      letterMap2[rightLetter] += 1;

      if (letterMap1[rightLetter] === letterMap2[rightLetter]) {
          matches += 1;
      } else if (letterMap1[rightLetter] === letterMap2[rightLetter] - 1){
        matches -= 1;
      }
  }
  return false;
};