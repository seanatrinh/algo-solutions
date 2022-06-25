// Max Binary Heap
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      if (element <= parent) break;

      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
}

let myHeap = new MaxBinaryHeap();
myHeap.insert(41);
myHeap.insert(39);
myHeap.insert(33);
myHeap.insert(18);
myHeap.insert(27);
myHeap.insert(12);
console.log(myHeap.values);
myHeap.insert(55);
console.log(myHeap.values);
myHeap.insert(1);
console.log(myHeap.values);
myHeap.insert(99);
console.log(myHeap.values);


