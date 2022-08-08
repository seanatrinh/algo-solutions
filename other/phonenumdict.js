/*
Phone Number / Dictionary
Given a string of digits (i.e. a phone number), return the list of words in a dictionary that can be formed
from that phone number on a keypad.
Solution: Use backtracking.
Use a trie in addition to backtracking to reduce needless backtracking.
Your interviewer might not require you to code the trie. Just know how you would use it.

1. Turn the dict into a tree so that you can search the words more quickly.
2. As you proceed through the phone number, you check whether the next character is a part of the trie.
3. If the prefix you've made so far is in the tree, then keep going.
4. If the prefix you've made so far is not in the tree, then do not proceed with that prefix.
*/

const NUMBER_MAP = {
  0: [''],
  1: [''],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z']
};

const dictionary = {
  drop: true,
  box: true,
  dropbox: true,
};

function phoneNumberDictionary(numbers, dictionary) {
  let words = {};
  let subset = [];

  let generateSubsets = (idx) => {
    if (idx === numbers.length) {
      let word = subset.join('');
      if (word in dictionary && !(word in words)) {
        words[word] = true;
      }
      return;
    }

    let letters = NUMBER_MAP[numbers[idx]];

    for (const letter of letters) {
      subset.push(letter);
      generateSubsets(idx + 1);
      subset.pop();
      generateSubsets(idx + 1);
    }
  }

  generateSubsets(0);

  return Object.keys(words);
}
// debugger;
console.log(phoneNumberDictionary('3767269', dictionary));

// class Trie {
//   constructor() {
//     this.root = {};
//     this.endSymbol = '*';
//   }

//   addWord(word) {
//     let node = this.root;
//     for (const letter of word) {
//       if (!(letter in node)) node[letter] = {};
//       node = node[letter];
//     }
//     node[this.endSymbol] = true;
//   }

//   contains(string) {
//     let node = this.root;
//     for (const letter of string) {
//       if (!(letter in node)) return false;
//       node = node[letter];
//     }
//     return this.endSymbol in node;
//   }
// }

/*
PRACTICE
*/

// function pnd(string, dictionary) {
//   let result = {};
//   let subset = [];

//   const generateSubsets = (idx) => {
//     if (idx === string.length) {
//       let potentialWord = subset.join('');
//       if (potentialWord in dictionary && !(potentialWord in result)) {
//         result[potentialWord] = true;
//       }
//       return;
//     }

//     let letters = NUMBER_MAP[string[idx]];

//     for (const letter of letters) {
//       subset.push(letter);
//       generateSubsets(idx + 1);
//       subset.pop();
//       generateSubsets(idx + 1);
//     }
//   }

//   generateSubsets(0);

//   return Object.keys(result);
// }




