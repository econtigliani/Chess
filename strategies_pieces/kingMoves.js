function kingMoves(table, row, col) {

    // All possible moves of a knight 
    let X = [1, -1, 0, 0]
    let Y = [0, 0, 1, -1]


    for (let i = 0; i < 4; i++) {
        let move_row = row + X[i]
        let move_col = col + Y[i]

        // Check if each possible move is valid or not 
        if (move_row >= max || move_row <= min || move_col >= max || move_col <= min) {
            break
        }

        if ((table[move_row][move_col] == ' ')) {
            possibleMovements.push({
                num:40,
                value: 0,
                from_row: row,
                from_col: col,
                to_col: move_col,
                to_row: move_row,
            })
        }
        if (blackPieces.includes(table[move_row][move_col])) {
            possibleMovements.push({
                num:41,
                value: 1,
                from_row: row,
                from_col: col,
                to_col: move_col,
                to_row: move_row,
            })
        }
    }

}