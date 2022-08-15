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
console.log(smallestSubstringContaining('ADOBECODEBANC', 'ABC'));

// attempt Aug 15, 2022

function minWindow(main, sub) {
  if (!main || ! sub || sub.length > main.length) return '';

  let subMap = generateMap(sub);
  let resultIdx = [0, Infinity];
  let uniqueChars = Object.keys(subMap).length;
  let matches = 0;
  let l = 0;
  let r = 0;
  let currentMap = {};

  while (r < main.length) {
      let rightLetter = main[r];

      if (!(rightLetter in subMap)) {
          r++;
          continue;
      }

      if (rightLetter in currentMap) {
          currentMap[rightLetter] += 1;
      } else {
          currentMap[rightLetter] = 1;
      }

      if (currentMap[rightLetter] === subMap[rightLetter]) {
          matches += 1;
      }

      while (matches === uniqueChars && l <= r) {
          let leftLetter = main[l];
          if (!(leftLetter in subMap)) {
              l++;
              continue;
          }

          if ((r - l) < (resultIdx[1] - resultIdx[0])) {
              resultIdx = [l , r];
          }

          // this is the line that I mess up on
          // usually i say if (currentMap[leftLetter] !== subMap[leftLetter])
          // this is wrong because we can have a SURPLUS of matches ...
          /*
           currentMap: a : 10
           subMap: a : 5

           in this example above, currentMap does not equal subMap
           but there are still enough letters in currentMap to meet subMap's needs

           therefore, we need the below condition.
          */
          if (currentMap[leftLetter] === subMap[leftLetter]) {
              matches -= 1;
          }

          currentMap[leftLetter] -= 1;

          l += 1;
      }

      r += 1;
  }
  return resultIdx[1] === Infinity ? '' : main.slice(resultIdx[0], resultIdx[1] + 1);

}

function generateMap(str) {
  let res = {};

  for (const letter of str) {
      if (letter in res) {
          res[letter] += 1;
      } else {
          res[letter] = 1;
      }
  }

  return res;
}