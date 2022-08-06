class HitCounter {
  constructor() {
    this.timeModCountMap = {};
  }

  hit(timestamp) {
    let tsMod = timestamp % 300;
    if (!(tsMod in this.timeModCountMap)) {
      this.timeModCountMap[tsMod] = {timestamp: timestamp, hits: 1};
    } else {
      if (timestamp === this.timeModCountMap[tsMod].timestamp) {
        this.timeModCountMap[tsMod].hits += 1;
      } else {
        this.timeModCountMap[tsMod].timestamp = timestamp;
        this.timeModCountMap[tsMod].hits = 1;
      }
    }
  }

  getHits(timestamp) {
    let totalHits = 0;

    for (const tsMod in this.timeModCountMap) {
      let timestampMetadata = this.timeModCountMap[tsMod];
      if (timestampMetadata.timestamp > timestamp - 300) {
        totalHits += timestampMetadata.hits;
      }
    }

    return totalHits;
  }
}

let myHitCounter = new HitCounter();
myHitCounter.hit(1);
myHitCounter.hit(2);
myHitCounter.hit(3);
console.log(myHitCounter.getHits(4)); // 3
myHitCounter.hit(300);
console.log(myHitCounter.getHits(300)); // 4
console.log(myHitCounter.getHits(301)); // 3. hit at 1 doesn't count since we're only counting past 5 mins