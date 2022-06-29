function isValidSubsequence(array, sequence) {
  let seqLen = sequence.length;
  let seqIdx = 0;

  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];

    if (currentNum === sequence[seqIdx]) {
      seqIdx++;
    }
  }
  return seqIdx === seqLen;
}

//tests

let test1 = {
  "array": [1, 1, 6, 1],
  "sequence": [1, 1, 1, 6]
}
debugger;
console.log(isValidSubsequence(test1.array, test1.sequence));