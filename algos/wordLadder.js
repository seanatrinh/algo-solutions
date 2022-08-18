var ladderLength = function(beginWord, endWord, wordList) {
  if (beginWord === endWord) return 0;
  if (beginWord.length !== endWord.length) return 0;
  if (!wordInArray(endWord, wordList)) return 0;

  let adjacencyList = {};
  let wordToHash = {};
  let queue = [];

  for (let i = -1; i < wordList.length; i++) {
      let word;
      i === -1 ? word = beginWord : word = wordList[i];
      wordToHash[word] = [];

      for (let j = 0; j < word.length; j++) {
          let hashedWord = word.slice(0, j) + '*' + word.slice(j + 1, word.length);
          wordToHash[word].push(hashedWord);

          if (!(hashedWord in adjacencyList)) {
              adjacencyList[hashedWord] = [word];
          } else {
              adjacencyList[hashedWord].push(word);
          }

          if (i === -1) queue.push(hashedWord);
      }
  }

  let level = 1;
  let seenWord = { beginWord: true };
  let seenHash = {};

  while (queue.length) {
      let queueSnapshot = queue.length;

      for (let i = 0; i < queueSnapshot; i++) {
          let hashedWord = queue.shift();
          if (hashedWord in seenHash) continue;

          let choices = adjacencyList[hashedWord];

          for (const word of choices) {
              if (word in seenWord) continue;
              if (word === endWord) return level + 1;

              queue.push(...wordToHash[word]);

              seenWord[word] = true;
          }
          seenHash[hashedWord] = true;
      }

      level++;
  }

  return 0;
}

function wordInArray(word, array) {
  for (const ele of array) {
      if (word === ele) return true;
  }
  return false;
}