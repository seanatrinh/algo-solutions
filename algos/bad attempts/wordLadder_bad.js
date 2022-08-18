/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
/*
input:
    beginWord
    endWord
    wordList
output: shortest path to transform word (integer)
edge cases:
    input related edge cases:
        beginWord
            null
            length 0
            type !== string
        endWord
            null
            length 0
            type !== string
        wordList
            null length 0
            type !== object
            each element
                type !== string
    other edge cases:
        if endword length !== beginword length, return 0
        if beginword === end word return 0
        if endWord is not in wordList, return 0

approach
    create adjacency list
        hit: [hot]
        hot: [dot, lot]
        dot: [hot, lot, dog]
        dog: [dot, log, cog]
        lot: [hot, dot]
        log: [lot, dog, cog]
        cog: [log]
    create adjacency list by...
        first, create a frequency map for each word in wordList + beginWord
            e.g.: hit: {h: 1, i: 1, t: 1}
        create a new map for the adjacency list
        iterate through each word in the word:frequencyMap object
            get uniqueChars for word
            inner loop: loop through each word
                if word === word continue
                get a count of matches between word + unique chars
                if matches === uniqueChars - 1, push word to adjacency array
    now we have an adjacency list
    we can do a BFS through the adjacency list to see the minimum number of steps to reach endWord



*/
var ladderLength = function(beginWord, endWord, wordList) {
  // edge cases: inputs
      if (!beginWord || !endWord || !wordList) return 0;
      if (typeof beginWord !== "string" || typeof endWord !== "string") return 0;
  // edge cases: other
  if (endWord.length !== beginWord.length || endWord === beginWord) return 0;
  let endWordInWordList = false;

  for (const word of wordList) {
      if (word === endWord) {
          endWordInWordList = true;
          break;
      }
  }

  if (!endWordInWordList) return 0;

  // generate word: frequencyMap object
  let wordFrequencyMap = {};

  for (let i = 0 ; i <= wordList.length; i++) {
      // add beginWord
      if (i === wordList.length) {
          wordFrequencyMap[beginWord] = generateFrequencyMap(beginWord);
          break;
      }

      // add words in word list
      let word = wordList[i];

      if (!(word in wordFrequencyMap)) {
          wordFrequencyMap[word] = generateFrequencyMap(word);
      }
  }

  let adjacencyList = {};

  for (const word in wordFrequencyMap) {
      adjacencyList[word] = [];
      let uniqueChars = Object.keys(wordFrequencyMap[word]).length;
      let wordMap = wordFrequencyMap[word];

      for (const wordToCompare in wordFrequencyMap) {
          if (word === wordToCompare) continue;
          let matches = 0;
          let wordToCompareMap = wordFrequencyMap[wordToCompare];

          let totalDifferingChars = Math.max(getTotalDifferingChars(wordMap, wordToCompareMap), getTotalDifferingChars(wordToCompareMap, wordMap));
          if (totalDifferingChars === 2) adjacencyList[word].push(wordToCompare);

//             for (cosnt char in wordMap) {
//                 if (totalDifferingChars > 2) break;

//                 if (wordMap[char] === wordToCompare[char]) {
//                     continue;
//                 } else if (wordMap[char] !== wordToCompare[char]) {
//                     totalDifferingChars += Math.abs(wordMap[char] - wordsToCompare[char]);
//                 } else if
//             }

//             for (const char in wordMap) {
//                 if (wordMap[char] === wordToCompareMap[char]) matches++;
//             }

//             if (matches === uniqueChars - 1) {
//                 adjacencyList[word].push(wordToCompare);
//             }
      }
  }
  console.log(adjacencyList)
  /*
  {
    hot: [ 'dot', 'lot', 'hit' ],
    dot: [ 'hot', 'dog', 'lot' ],
    dog: [ 'dot', 'log', 'cog' ],
    lot: [ 'hot', 'dot', 'log' ],
    log: [ 'dog', 'lot', 'cog' ],
    cog: [ 'dog', 'log' ],
    hit: [ 'hot' ]
  }
  */

  // create a seen map to detect cycles
  let seen = {};
  // push begin word + initial level into queue
  let queue = [{ word: beginWord, level: 1 }];

  while (queue.length > 0) {
      let shifted = queue.shift();
      console.log(shifted);

      // if we're at our end word, return how many levels it took to get here
      if (shifted.word === endWord) {
          return shifted.level;
      }

      // if we're back at beginWord, its a cycle, so we break
      // if (shifted.word in seen && shifted.word === beginWord) break;
      // add word to seen list
      seen[shifted.word] = true;

      let adjacentWords = adjacencyList[shifted.word];

      // loop through adjacent words, and push to queue
      for (const adjacentWord of adjacentWords) {
          if (!(adjacentWord in seen)) {
              queue.push({ word: adjacentWord, level: shifted.level + 1 });
          }
      }
  }
  return 0;
};

function generateFrequencyMap(str) {
  let res = {};

  for (const char of str) {
      if (char in res) {
          res[char] += 1;
      } else {
          res[char] = 1;
      }
  }

  return res;
}

function getTotalDifferingChars(map1, map2) {
  let map1Difference = 0;

  for (const char in map1) {
      if (map1[char] === map2[char]) {
          continue;
      } else if (!(char in map2)) {
          map1Difference += map1[char];
      } else if (map1[char] !== map2[char]) {
          map1Difference += Math.abs(map1[char] - map2[char]);
      }
  }

  return map1Difference;
}