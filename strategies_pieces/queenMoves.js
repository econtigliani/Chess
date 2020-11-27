function queenMoves(table, row, col) {
    //Row - Moves
    //Eat row
    dance:
    for (let i = (row + 1); i < max; i++) {
        if (whitePieces.includes(table[i][col])) {
            if (table[i - 1][col] == ' ') {
                possibleMovements.push({
                    num:24,
                    value: 0,
                    from_row: row,
                    from_col: col,
                    to_col: col,
                    to_row: i - 1,
                })
            }
            break dance;
        }
        if (blackPieces.includes(table[i][col])) {
            possibleMovements.push({
                num:25,
                value: 8,
                from_row: row,
                from_col: col,
                to_col: col,
                to_row: i,
            })
            break dance;
        }
    }
    //Eat row behind
    dance:
    for (let i = (row - 1); i > min; i--) {
        if (whitePieces.includes(table[i][col])) {
            if (table[i + 1][col] == ' ') {
                possibleMovements.push({
                    num:26,
                    value: 0,
                    from_row: row,
                    from_col: col,
                    to_col: col,
                    to_row: i + 1,
                })
            }
            break dance;
        }
        if (blackPieces.includes(table[i][col])) {
            possibleMovements.push({
                num:27,
                value: 8,
                from_row: row,
                from_col: col,
                to_col: col,
                to_row: i,
            })
            break dance;
        }
    }

    //Col - Moves
    //Eat col right
    dance:
    for (let i = (col + 1); i < max; i++) {

        if (whitePieces.includes(table[row][i])) {
            if (table[row][i - 1] == ' ') {
                possibleMovements.push({
                    num:28,
                    value: 0,
                    from_row: row,
                    from_col: col,
                    to_col: i - 1,
                    to_row: row,
                })
            }
            break dance;
        }
        if (blackPieces.includes(table[row][i])) {
            possibleMovements.push({
                num:29,
                alue: 8,
                from_row: row,
                from_col: col,
                to_col: i,
                to_row: row,
            })
            break dance;
        }
    }
    //Eat col left

    for (let i = (col - 1); i > min; i--) {
        if (whitePieces.includes(table[row][i])) {
            if (table[row][i + 1] == ' ') {
                possibleMovements.push({
                    num:30,
                    value: 0,
                    from_row: row,
                    from_col: col,
                    to_col: i + 1,
                    to_row: row,
                })
            }
            break
        }
        if (blackPieces.includes(table[row][i])) {
            possibleMovements.push({
                num:31,
                value: 8,
                from_row: row,
                from_col: col,
                to_col: i,
                to_row: row,
            })
            break
        }
    }

    dance:
    for (let i = (row + 1), j = (col + 1); i < max && j < max; i++, j++) {

        if (whitePieces.includes(table[i][j])) {
            if (table[i - 1][j - 1] == ' ') {
                possibleMovements.push({
                    num:32,
                    value: 0,
                    from_row: row,
                    from_col: col,
                    to_col: (j - 1),
                    to_row: (i - 1),
                })
            }
            break dance;
        }
        if (blackPieces.includes(table[i][j])) {
            possibleMovements.push({
                num:33,
                value: 7,
                from_row: row,
                from_col: col,
                to_col: j,
                to_row: i,
            })
            break dance;
        }
    }

    // comer diagonal izquierda arriba
    for (let i = (row + 1), j = (col - 1); i < max && j > min; i++, j--) {
        if (blackPieces.includes(table[i][j])) {
            possibleMovements.push({
                num:34,
                value: 7,
                from_row: row,
                from_col: col,
                to_col: j,
                to_row: i,
            })
            break
        }
        if (whitePieces.includes(table[i][j])) {
            if (table[i - 1][j + 1] == ' ') {
                possibleMovements.push({
                    num:35,
                    value: 0,
                    from_row: row,
                    from_col: col,
                    to_col: (j + 1),
                    to_row: (i - 1),
                })
            }
            break
        }
    }
    //eat diagonal izquierda abajo
    for (let i = (row - 1), j = (col - 1); i > min && j > min; i--, j--) {
        if (blackPieces.includes(table[i][j])) {
            possibleMovements.push({
                num:36,
                value: 7,
                from_row: row,
                from_col: col,
                to_col: j,
                to_row: i,
            })
            break
        }
        if (whitePieces.includes(table[i][col])) {
            if (table[i + 1][j + 1] == ' ') {
                possibleMovements.push({
                    num:37,
                    value: 0,
                    from_row: row,
                    from_col: col,
                    to_col: (j + 1),
                    to_row: (i + 1),
                })
            }
            break
        }
    }
    //eat diagonal derecha abajo
    dance:
    for (let i = (row - 1), j = (col + 1); i > min && j < max; i--, j++) {
        if (whitePieces.includes(table[i][j])) {
            if (table[i + 1][j - 1] == ' ') {
                possibleMovements.push({
                    num:38,
                    value: 0,
                    from_row: row,
                    from_col: col,
                    to_col: (j - 1),
                    to_row: (i + 1),
                })
            }
            break dance;
        }
        if (blackPieces.includes(table[i][j])) {

            possibleMovements.push({
                num:39,
                value: 7,
                from_row: row,
                from_col: col,
                to_col: j,
                to_row: i,
            })
            break dance;
        }
    }
}