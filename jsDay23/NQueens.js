
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const results = [];
    solve(results, [], n, 0);
    return results;
};

function solve(results, state, n, row) {
    if (row === n) {
        results.push(generateBoard(state, n));
        return;
    }
    for (let col = 0; col < n; col++) {
        if (isValid(state, row, col)) {
            state.push(col);
            solve(results, state, n, row + 1);
            state.pop();
        }
    }
}

function isValid(state, row, col) {
    for (let r = 0; r < row; r++) {
        const c = state[r];
        if (c === col || Math.abs(c - col) === Math.abs(r - row)) {
            return false;
        }
    }
    return true;
}

function generateBoard(state, n) {
    const board = [];
    for (let row = 0; row < n; row++) {
        let rowStr = '';
        for (let col = 0; col < n; col++) {
            rowStr += (state[row] === col) ? 'Q' : '.';
        }
        board.push(rowStr);
    }
    return board;
}
