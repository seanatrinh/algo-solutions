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
  constructor(max_id) {
    this.max_id = max_id;
    this.allocated_ids = {};
    this.released_ids = [];
    this.next_id = 0;
  }

  allocate() {
    let id = null;

    if (this.next_id <= this.max_id) {
      id = this.next_id;
      this.next_id += 1;
    } else if (this.released_ids.length > 0) {
      id = this.released_ids.pop();
    }

    if (id !== null) {
      this.allocated_ids[id] = true;
      return id;
    } else {
      console.error("Error: No IDs left to allocate.");
    }
  }

  release(id) {
    if (this.isValidID(id) && this.allocated_ids[id]) {
      delete this.allocated_ids[id];
      this.released_ids.push(id);
    } else {
      console.error(`Error: Cannot release ID ${id}.`);
    }
  }

  isValidID(id) {
    return typeof id === "number" && id >= 0 && id <= this.max_id;
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