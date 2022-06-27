const DIRECTIONS = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
const LIVE = 1;

var gameOfLife = function(board) {
    let rows = board.length;
    let cols = board[0].length;

    let getNeighbors = (row, col) => {
        let neighbors = 0;

        for (const [x, y] of DIRECTIONS) {
            let newRow = row + x;
            let newCol = col + y;

            if (newRow >= 0 && newCol >= 0 && newRow < rows && newCol < cols && board[newRow][newCol] === LIVE) {
                neighbors += 1;
            }
        }

        return neighbors;
    };

    let updates = [];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let neighbors = getNeighbors(r, c);

            let cell = board[r][c];

            if (cell === LIVE) {
                if (neighbors < 2 || neighbors > 3) updates.push([r, c, 0]);
            } else {
                if (neighbors === 3) updates.push([r, c, 1]);
            }
        }
    }

    for (const [x, y, state] of updates) {
        board[x][y] = state;
    }
};