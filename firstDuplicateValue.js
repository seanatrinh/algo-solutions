function firstDuplicateValue(array) {
  let seen = {};

  for (let i = 0; i < array.length; i++) {
    let currentNumber = array[i];

    if (seen[currentNumber] === undefined) {
      seen[currentNumber] = true;
    } else {
      return currentNumber;
    }
  }
  return -1;
}