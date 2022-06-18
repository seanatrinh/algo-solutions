function reverseWordsInString(string) {
  let splitString = string.split(' ');
  let result = [];

  for (let i = splitString.length - 1; i >= 0; i--) {
    result.push(splitString[i]);
  }

  return result.join(' ');
}

// Tests

let test1 = {
  "string": "Reverse These Words"
};

console.log(reverseWordsInString(test1.string)); //expected: Words These Reverse