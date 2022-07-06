const OPERANDS = {
  '+': (a, b) => a + b,
  '*': (a, b) => a * b,
  '-': (a, b) => a - b,
  '/': (a, b) => Math.trunc(a / b),
}

var evalRPN = function(tokens) {
  let numStack = [];

  for (const item of tokens) {
      if (item in OPERANDS) {
          let rightNum = numStack.pop();
          let leftNum = numStack.pop();
          numStack.push(OPERANDS[item](leftNum, rightNum));
      } else {
          numStack.push(Number(item));
      }
  }

  return numStack.pop();

};