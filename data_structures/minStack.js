// https://leetcode.com/problems/min-stack/
var MinStack = function() {
  this.stack = [];
  this.minStack = [];
};

MinStack.prototype.push = function(val) {
  this.stack.push(val);

  if (this.minStack.length === 0) {
      this.minStack.push(val);
  } else {
      let currentMin = this.minStack[this.minStack.length - 1];

      if (val <= currentMin) {
          this.minStack.push(val);
      }
  }
};

MinStack.prototype.pop = function() {
  let currentMin = this.minStack[this.minStack.length - 1];

  let popped = this.stack.pop();

  if (popped === currentMin) {
      this.minStack.pop();
  }

  return popped;
};

MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1];
};