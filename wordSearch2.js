/*
input: board, words
output: array of words found on board
edge cases:
- board null/length 0
- words null/length 0

approach
- create a map of first letter + word array
- loop through the matrix
    - if the cell matches the first letter of a word in the words array, run a dfs passing in the array of words

- dfs
    - goal: keep searching if we continue to reach letters in either of the words
    - if array is empty, break
    - if array isn't empty, dfs on each word
    - if we've hit the last letter on a word, delete it from the map and push it to result array

-
*/
const DIRECTIONS = [[-1, 0], [1, 0], [0, -1], [0, 1]];

var findWords = function(board, words) {
    let wordsMap = {};

    for (const word of words) {
        const firstLetter = word[0];
        if (wordsMap[firstLetter] === undefined) {
            wordsMap[firstLetter] = [word];
        } else {
            wordsMap[firstLetter].push(word);
        }
    }

    let wordsOnBoard = [];

    let dfs = (row, col, i, word) => {

        if (i + 1 === word.length) return true;

        for (const [x, y] of DIRECTIONS) {
            let newRow = row + x;
            let newCol = col + y;

            if (newRow >= 0 && newCol >= 0 && newRow < board.length && newCol < board[0].length && board[newRow][newCol] === word[i + 1]) {
                dfs(newRow, newCol, i + 1, word);
            }
        }
    };

    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length; c++) {
            if (board[r][c] in wordsMap) {
                let wordsSubarray = wordsMap[board[r][c]];

                for (const word of wordsSubarray) {
                    if (dfs(r, c, 0, word)) {
                        wordsOnBoard.push(word);
                        wordsMap[board[r][c]] = wordsMap[board[r][c]].splice(wordsMap[board[r][c]].indexOf(word), 1);
                    }
                }
            }
        }
    }


    return wordsOnBoard;
};

let board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]];
let words = ["oath","pea","eat","rain"];

debugger;
console.log(findWords(board, words));