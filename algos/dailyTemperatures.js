// optimal O(n) time, O(n) space
var dailyTemperatures = function(temperatures) {
  let result = new Array(temperatures.length).fill(0);
  let stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    let temp = temperatures[i];

    while (stack.length !== 0 && temp > stack[stack.length - 1].temp) {
      let popped = stack.pop();
      result[popped.idx] = i - popped.idx;
    }
    stack.push({temp: temp, idx: i});
  }

  return result;
}
// debugger;
console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))
// naive O(n^2)
// var dailyTemperatures = function(temperatures) {
//   let res = [];

//   for (let i = 0; i < temperatures.length; i++) {
//       let current = temperatures[i];

//       if (i === temperatures.length - 1) {
//           res.push(0);
//           break;
//       }

//       let days = 0;
//       for (let j = i + 1; j < temperatures.length; j++) {
//           days += 1;
//           let future = temperatures[j];

//           if (future > current) {
//               res.push(days);
//               break;
//           }
//           if (j === temperatures.length - 1) {
//               res.push(0);
//           }
//       }
//   }
//   return res;
// };