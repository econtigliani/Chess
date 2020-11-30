const { whitePieces, blackPieces } = require("../enums/pieces");

function bishopMoves(table,row,col,turnColor){
    
    if (turnColor == 'white') {
        turnPieces = whitePieces
        counterPieces = blackPieces
    } else {
        turnPieces = blackPieces
        counterPieces = whitePieces
    }
    
    let possibleMovements = [];
    for (let i = (row + 1), j = (col + 1); i < max && j < max; i++, j++) {

        if (counterPieces.includes(table[i][j])) {
            possibleMovements.push({
                num:14,
                value: ((valuePieces[letterToName[table[i][j]]]) * weightPieces.eating),
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
                    value: valuePieces.Bishop,
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
                value: ((valuePieces[letterToName[table[i][j]]]) * weightPieces.eating),
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
                    value: valuePieces.Bishop,
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
                value: ((valuePieces[letterToName[table[i][j]]]) * weightPieces.eating),
                from_row: row,
                from_col: col,
                to_col: j,
                to_row: i,
            })
            break
        }
        if (turnPieces.includes(table[i][j])) {
            if (table[i + 1][j + 1] == ' ') {
                possibleMovements.push({
                    num: 19,
                    value: valuePieces.Bishop,
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
                value: ((valuePieces[letterToName[table[i][j]]]) * weightPieces.eating),
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
                    value: valuePieces.Bishop,
                    from_row: row,
                    from_col: col,
                    to_col: (j - 1),
                    to_row: (i + 1),
                })
            }
            break
        }
    }
    return possibleMovements;
}

module.exports.bishopMoves = bishopMoves;