function horseMoves(table, row, col) {
    // All possible moves of a knight 
    let X = [2, 1, -1, -2, -2, -1, 1, 2]
    let Y = [1, 2, 2, 1, -1, -2, -2, -1]

    dance:
    for (let i = 0; i < 8; i++) {
        let move_row = row + X[i]
        let move_col = col + Y[i]
        // Check if each possible move is valid or not 
        if ((move_row >= max || move_row <= min) || (move_col >= max || move_col <= min)) {
            break dance;
        }

        if ((table[move_row][move_col] == ' ')) {
            possibleMovements.push({
                num:22,
                value: 0,
                from_row: row,
                from_col: col,
                to_col: move_col,
                to_row: move_row,
            })
        }
        if (blackPieces.includes(table[move_row][move_col])) {
            possibleMovements.push({
                num:23,
                value: 4,
                from_row: row,
                from_col: col,
                to_col: move_col,
                to_row: move_row,
            })
        }

    }
}