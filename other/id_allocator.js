class Allocator {
  constructor(max_val) {
    this.queue = [];
    this.next_id = 0;
    this.allocated = {};
    this.max_val = max_val;
  }

  allocate() {
    let result = null;

    if (this.next_id <= this.max_val) {
      result = this.next_id;
      this.next_id += 1;
    } else if (this.queue.length > 0) {
      result = this.queue.shift();
    }

    if (result !== null) {
      this.allocated[result] = true;
      return result;
    } else {
      console.error("ERROR: No IDs available to allocate. Release IDs to allocate more.");
    }
  }

  release(id) {
    if (id > this.max_val || !(id >= 0) || !(id in this.allocated)) {
      console.error(`ERROR: The ID ${id} cannot be relased.`);
    }
    delete this.allocated[id];
    this.queue.push(id);
  }
}
// debugger;
let myAllocator = new Allocator(2);
console.log(myAllocator.allocate());
console.log(myAllocator.allocate());
console.log(myAllocator.allocate());
console.log(myAllocator.allocate());
console.log(myAllocator.release(1));
console.log(myAllocator.allocate());
console.log(myAllocator.release(-1));
console.log(myAllocator.release(3));