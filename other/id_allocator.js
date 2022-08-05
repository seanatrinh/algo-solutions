/*
Create an ID allocator with an allocate and release method

allocate
- allocates the next available ID. if there is no next available ID, the queue will be checked.
- logic related to release:
  - if we're able to allocate an ID, we need to add the ID to a hashMap so we know we've allocated it

release
- check if the ID being asked to be released is...
  - within range of valid IDs (greater than or equal to zero, less than or equal to max val)
  - has been allocated
- if above is true,
  - delete the id being released from our allocated hash map
  - add the released id to the queue, so it can be allocated
*/
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