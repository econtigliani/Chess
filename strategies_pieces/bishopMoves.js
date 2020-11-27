function bishopMoves(table,row,col){
    for (let i = (row + 1), j = (col + 1); i < max && j < max; i++, j++) {

        if (counterPieces.includes(table[i][j])) {
            possibleMovements.push({
                num:14,
                value: 8,
                from_row: row,
                from_col: col,
                to_col: j,
                to_row: i,
            })
            break
        }
        if (turnPieces.includes(table[i][j])) {
            if (table[i - 1][j - 1] == ' ') {
                possibleMovements.push({
                    num: 15,
                    value: 0,
                    from_row: row,
                    from_col: col,
                    to_col: (j - 1),
                    to_row: (i - 1),
                })
            }
            break
        }
    }

    // comer diagonal izquierda arriba
    for (let i = (row + 1), j = (col - 1); i < max && j > min; i++, j--) {
        if (counterPieces.includes(table[i][j])) {
            possibleMovements.push({
                num: 16,
                value: 7,
                from_row: row,
                from_col: col,
                to_col: j,
                to_row: i,
            })
            break
        }
        if (turnPieces.includes(table[i][j])) {
            if (table[i - 1][j + 1] == ' ') {
                possibleMovements.push({
                    num: 17,
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
        if (counterPieces.includes(table[i][j])) {
            possibleMovements.push({
                num: 18,
                value: 7,
                from_row: row,
                from_col: col,
                to_col: j,
                to_row: i,
            })
            break
        }
        if (turnPieces.includes(table[i][col])) {
            if (table[i + 1][j + 1] == ' ') {
                possibleMovements.push({
                    num: 19,
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
    for (let i = (row - 1), j = (col + 1); i > min && j < max; i--, j++) {
        if (counterPieces.includes(table[i][j])) {

            possibleMovements.push({
                num:20,
                value: 7,
                from_row: row,
                from_col: col,
                to_col: j,
                to_row: i,
            })
            break
        }
        if (turnPieces.includes(table[i][j])) {
            if (table[i + 1][j - 1] == ' ') {
                possibleMovements.push({
                    num:21,
                    value: 0,
                    from_row: row,
                    from_col: col,
                    to_col: (j - 1),
                    to_row: (i + 1),
                })
            }
            break
        }
    }
}
