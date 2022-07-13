// https://docs.google.com/presentation/d/1mEFOyQBeyK-qevimrmU3eEZsCRvOHRf_iO6UXAiGjKA/edit#slide=id.g13c2bcfc62b_0_5
function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let idxOne = 0;
  let idxTwo = 0;
  let smallestDiff = Infinity;
  let current = Infinity;
  let smallestPair;

  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    let numOne = arrayOne[idxOne];
    let numTwo = arrayTwo[idxTwo];

    if (numOne < numTwo) {
      current = numTwo - numOne;
      idxOne++;
    } else if (numTwo < numOne) {
      current = numOne - numTwo;
      idxTwo++;
    } else {
      return [numOne, numTwo];
    }

    if (current < smallestDiff) {
      smallestDiff = current;
      smallestPair = [numOne, numTwo];
    }
  }
  return smallestPair;
}