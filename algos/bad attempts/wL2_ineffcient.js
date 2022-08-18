/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
/*
output: array of shortest transformation sequences
edge cases:
    input null
    input length 0
    input type incorrect
    begin word = end word
    begin word length != endword length

approach:
    create an adjacency list
    bfs: find min depth (for shortest transformation)
    dfs: with min depth, use backtracking to generate all valid sequences
*/
var findLadders = function(beginWord, endWord, wordList) {
  if (!beginWord || !endWord || !wordList) return [];
  if (beginWord.length === 0 || endWord.length === 0 || wordList.length === 0 || beginWord.length !== endWord.length) return [];
  if (typeof beginWord !== 'string' || typeof endWord !== 'string') return [];
  if (beginWord === endWord) return [];
  if (!(wordInArray(endWord, wordList))) return [];

  let adjacencyList = {};
  let seen = {};
  for (let i = -1; i < wordList.length; i++) {
      let word;
      i === -1 ? word = beginWord : word = wordList[i];
      if (word in seen) continue;
      adjacencyList[word] = [];

      for (const compareWord of wordList) {
          if (word === compareWord) continue;
          if (stringsDifferByOneCharacter(word, compareWord)) adjacencyList[word].push(compareWord);
      }

      seen[word] = true;
  }

  let queue = [ beginWord ];
  let depth = 1;
  let bfsSeen = {};

  while (queue.length > 0) {
      let queueSnapshot = queue.length;
      let foundEnd = false;
      for (let i = 0; i < queueSnapshot; i++) {
          let word = queue.shift();
          if (word in bfsSeen) continue;
          if (word === endWord) {
              foundEnd = true;
              break;
          }

          queue.push(...adjacencyList[word]);

          bfsSeen[word] = true;
      }
      if (foundEnd) {
          break;
      } else {
          depth++;
      }
  }

  let result = [];
  let sequence = [ beginWord ];
  let dfsSeen = { beginWord: true };

  function generateSequences(level) {
      let word = sequence[sequence.length - 1];

      if (level === depth) {
          if (word === endWord) result.push([...sequence]);
          return;
      }

      let neighbors = adjacencyList[word];

      for (const neiWord of neighbors) {
          if (neiWord in dfsSeen) continue;
          dfsSeen[neiWord] = true;
          sequence.push(neiWord);

          generateSequences(level + 1);

          delete dfsSeen[neiWord];
          sequence.pop();
      }
  }

  generateSequences(1);

  return result;
};

function stringsDifferByOneCharacter(str1, str2) {
  if (str1.length !== str2.length) return false;
  let charDifferences = 0;

  for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) charDifferences++;
  }

  return charDifferences === 1 ? true : false;
}

function wordInArray(word, array) {
  for (const ele of array) {
      if (ele === word) return true;
  }
  return false;
}