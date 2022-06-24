/*
input: bigstring, smallstring
output: smallest substring in bigString containing all chars in smallString
edge cases:
- smallString len > bigString len => ''
- bigString len 0 => ''
- bigString null => ''
- smallString len 0 => ''
- smallString null => ''

 r
abcd$ef$axb$c$
l

$$abf

approach:
- create a letter:count map of smallString
- create a secondary letter:0 map of smallString which will be incremented/decremented as we look through bigstring
- create a "charsFullyFound" variable, that will increment as we've fully found chars, denoted in smallString map
- create a "charsThatNeedToBeFound" variable, that will be Object.keys(smallStringMap).length
- create a resultIndex array that will hold [startIdx, endIdx]

- create a left and right pointer, starting at 0
- while right pointer < bigString.length
  - create a variable for current left and current right
  - if small string map has current right
    - increment secondary map @ current right
  - if small string map @ current right = secondary map @ current right
    - increment charsFullyFound
  - if charsFullyFound === charsThatNeedToBeFound
    - if (r - l) < (resultIndex[1] - resultIndex[2]) {
      resultIndex = [l, r]
    }
    - if small string map @ current left exists
      - decrement secondary map @ current left
    - increment left pointer
  - increment right pointer

- return bigString.slice(resultIndex[0], resultIndex[1] + 1);
*/

function smallestSubstringContaining(bigString, smallString) {
  let smallMap = {};

  for (let i = 0; i < smallString.length; i++) {
    let letter = smallString[i];

    if (smallMap[letter] === undefined) {
      smallMap[letter] = 1;
    } else {
      smallMap[letter] += 1;
    }
  }

  let uniqueLetters = Object.keys(smallMap).length;
  let charsFullyFound = 0;
  let l = 0;
  let r = 0;
  let currentMap = {};
  let resIdx = [0, Infinity];

  while (r < bigString.length) {
    let rightLetter = bigString[r];

    if (smallMap[rightLetter] === undefined) {
      r++;
      continue;
    }

    if (currentMap[rightLetter] === undefined) {
      currentMap[rightLetter] = 1;
    } else {
      currentMap[rightLetter] += 1;
    }

    if(currentMap[rightLetter] === smallMap[rightLetter]) {
      charsFullyFound += 1;
    }

    while (charsFullyFound === uniqueLetters && l <= r) {
      if ((r - l) < (resIdx[1] - resIdx[0])) {
        resIdx = [l, r];
      }

      let leftLetter = bigString[l];

      if (smallMap[leftLetter] === undefined) {
        l++;
        continue;
      }

      if (currentMap[leftLetter] === smallMap[leftLetter]) {
        charsFullyFound -= 1;
      }

      currentMap[leftLetter] -= 1;
      l++;
    }
    r++;
  }

  return resIdx[1] === Infinity ? '' : bigString.slice(resIdx[0], resIdx[1] + 1);
}

// tests
const test1 = {
  "bigString": "abcd$ef$axb$c$",
  "smallString": "$$abf"
};
console.log(smallestSubstringContaining(test1.bigString, test1.smallString));