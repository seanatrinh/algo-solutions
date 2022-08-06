// LeetCode #362

class HitCounter {
  constructor() {
    this.tsModHash = {};
  }

  hit(timestamp) {
    let tsMod = timestamp % 300;

    if (!(tsMod in this.tsModHash)) {
      this.tsModHash[tsMod] = {
        recent_ts: timestamp,
        hits: 1
      };
    } else {
      if (this.tsModHash[tsMod].recent_ts === timestamp) {
        this.tsModHash[tsMod].hits += 1;
      } else {
        this.tsModHash[tsMod].recent_ts = timestamp;
        this.tsModHash[tsMod].hits = 1;
      }
    }

  }

  getHits(timestamp) {
    let total_hits = 0;

    for (const tsMod in this.tsModHash) {
      const {recent_ts, hits} = this.tsModHash[tsMod];
      if (recent_ts > timestamp - 300) {
        total_hits += hits;
      }
    }

    return total_hits;
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