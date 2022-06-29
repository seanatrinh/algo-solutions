/*
problem: Write a function that, given a string, returns its longest palindromic substring.

A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes.

You can assume that there will only be one longest palindromic substring.

inputs: string
outputs: longest palindromic substring
edge cases:
- null string, empty string
- string length 1 -> return string

example:

{
  "string": "abaxyzzyxf"
}

abaxyzzyxf

approach:

brute force: check every substring and see if its palindrome?
*/

function longestPalindromicSubstring(string) {
  if (string.length === 1) return string;

  let lps = '';
  for (let i = 0; i < string.length - 1; i++) {
    let j = string.length;

    while (i < j) {
      let substring = string.slice(i, j);

      if (lps.length >= substring.length) {
        break;
      }

      if (lps.length < substring.length && isPalindrome(substring)) {
        lps = substring;
      }
      j--;
    }
  }
  return lps;
}

function isPalindrome(str) {
  let l = 0;
  let r = str.length - 1;

  while (l < r) {
    if (str[l] !== str[r]) return false;
    l++;
    r--;
  }
  return true;
}

// Test cases
let test1 = {
  "string": "abaxyzzyxf"
};

console.log(longestPalindromicSubstring(test1.string));

// console.log(isPalindrome(test1.string));
