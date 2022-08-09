/*
Create a class that will receive pieces of a file and tell whether the file can be assembled from the pieces.
*/

// if all chunks are given...
// chunks = array, size = int
function isFileDone(chunks, size) {
  if (chunks === null || chunks.length === 0) return false;

  chunks.sort((a, b) => a.start - b.start);
  if (chunks[0].start !== 0) return false;

  let end = chunks[0].end;

  for (let i = 1; i < chunks.length; i++) {
    let chunk = chunks[i];
    if (chunk.start > end) {
      return false;
    } else {
      end = Math.max(end, chunk.end);
    }
  }

  return end === size;
}

let test_a = {
  chunks: [
    {start: 0, end: 2},
    {start: 2, end: 4},
    {start: 4, end: 6},
    {start: 6, end: 8},
    {start: 8, end: 10}
  ],
  size: 10
};

// chunks in stream
class Downloader {
  constructor(size) {
    this.size = size;
    this.chunks = [];
  }

  /*
  {start: 0, end: 2}
  {start: 1, end: 5}
  */
  addBlock(chunk) {
    // add the new chunk to chunks array
    this.chunks.push(chunk);
    // sort chunks array by start
    this.chunks.sort((a, b) => a.start - b.start);

    if (this.chunks.length > 1) {
      let smallest_start = this.chunks.shift();

      while (this.chunks.length !== 0 && smallest_start.end >= this.chunks[0].start) {
        let c = this.chunks.shift();
        smallest_start.end = Math.max(smallest_start.end, c.end);
      }

      this.chunks.push(smallest_start);
    }
  }

  isDone() {
    // chunks length must be greater than 0
    // chunks start must be 0
    // chunks end must match size
    if (this.chunks.length !== 0
      && this.chunks[0].start === 0
      && this.chunks[this.chunks.length - 1].end === this.size) {
      return true;
    } else {
      return false;
    }
  }
}

let myDownloader = new Downloader(10);
myDownloader.addBlock({start: 0, end: 2});
myDownloader.addBlock({start: 1, end: 1});
myDownloader.addBlock({start: 1, end: 5});
myDownloader.addBlock({start: 3, end: 10});
console.log(myDownloader.isDone());


function isFileDone2(chunks, size) {
  if (chunks.length === 0 || chunks === null) return false;
  chunks.sort((a, b) => a.start - b.start);
  if (chunks[0].start !== 0 || chunks[chunks.length - 1].end !== size) return false;

  let final = chunks[0];

  for (let i = 1; i < chunks.length; i++) {
    const {start, end} = chunks[i];

    if (final.end < start) {
      return false;
    } else {
      final.end = Math.max(final.end, end);
    }
  }


  return final.end === size;
}

class DL {
  constructor(size) {
    this.size = size;
    this.chunks = [];
  }

  addBlock(chunk) {
    this.chunks.push(chunk);
    this.chunks.sort((a, b) => (a.start - b.start));

    if (this.chunks.length > 1) {
      let smallestStart = this.chunks.shift();
      while (this.chunks.length !== 0 && smallestStart.end >= this.chunks.length[0].start) {
        let mergableChunk = this.chunks.shift();
        smallestStart.end = Math.max(smallestStart.end, mergableChunk.end);
      }
      this.chunks.push(smallestStart);
    }
  }

}