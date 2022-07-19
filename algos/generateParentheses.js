/*
- can't start with closed parentheses
- keep track of open & close parenth count
- can only add closed parenth if close < open
*/

function generateParentheses(n) {
  let res = [];

  let dfs = (open, closed, parentheses) => {
    if (open > n || closed > n || closed > open) return;
    if (open === n && closed === n) {
      res.push(parentheses);
      return;
    }

    dfs(open + 1, closed, parentheses + '(');
    dfs(open, closed + 1, parentheses + ')');
  }

  dfs(0, 0, '');

  return res;
}

console.log(generateParentheses(3));