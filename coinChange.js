var coinChange = function(coins, amount) {
  coins.sort((a, b) => b - a);
  const map = new Map();

  let min = Infinity;

  const helper = (start, sum, count) => {
    if (sum > amount) {
      return;
    }

    if (sum === amount) {
      min = Math.min(min, count);
      return;
    }

    if (map.has(sum) && map.get(sum) <= count) {
      return null;
    }

    for (let i = start; i < coins.length; i++) {
      sum = sum + coins[i];
      count = count + 1;

      helper(i, sum, count);
      let prevCount = map.get(sum) || Infinity;
      map.set(sum, Math.min(prevCount, count));

      count = count - 1;
      sum = sum - coins[i];
    }

  }

  helper (0, 0, 0);

  return min === Infinity ? -1 : min;
};

let test1 = {
  coins: [1, 2, 5],
  amount: 11,
};
let test2 = {
  coins: [2],
  amount: 3,
};
console.log(coinChange(test1.coins, test1.amount));
debugger;
console.log(coinChange(test2.coins, test2.amount));