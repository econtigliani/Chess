const { blackPieces, whitePieces } = require("../enums/pieces")
const { letterToName } = require('../enums/letterToName')
const { valuePieces } = require("../enums/valuePieces")
const weightPieces = require("../enums/weightPieces").weightPieces
const { max, min } = require("../enums/limitsBoard")

function queenMoves(table, row, col, turnColor) {
       
    if (turnColor == 'white') {
        turnPieces = whitePieces
        counterPieces = blackPieces
    } else {
        turnPieces = blackPieces
        counterPieces = whitePieces
    }

    let possibleMovements = []
    //Row - Moves
    //Eat row
    dance:
    for (let i = (row + 1); i < max; i++) {
        if (turnPieces.includes(table[i][col])) {
            if (table[i - 1][col] == ' ') {
                possibleMovements.push({
                    num:24,
                    value: valuePieces.Queen-10,
                    from_row: row,
                    from_col: col,
                    to_col: col,
                    to_row: i - 1,
                })
            }
            break dance;
        }
        if (counterPieces.includes(table[i][col])) {
            possibleMovements.push({
                num:25,
                value: ((valuePieces[letterToName[table[i][col]]]) * weightPieces.eating),
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
    for (let i = (row - 1); i >= min; i--) {
        if (turnPieces.includes(table[i][col])) {
            if (table[i + 1][col] == ' ') {
                possibleMovements.push({
                    num:26,
                    value: valuePieces.Queen,
                    from_row: row,
                    from_col: col,
                    to_col: col,
                    to_row: i + 1,
                })
            }
            break dance;
        }
        if (counterPieces.includes(table[i][col])) {
            possibleMovements.push({
                num:27,
                value: ((valuePieces[letterToName[table[i][col]]]) * weightPieces.eating),
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

        if (turnPieces.includes(table[row][i])) {
            if (table[row][i - 1] == ' ') {
                possibleMovements.push({
                    num:28,
                    value: valuePieces.Queen,
                    from_row: row,
                    from_col: col,
                    to_col: i - 1,
                    to_row: row,
                })
            }
            break dance;
        }
        if (counterPieces.includes(table[row][i])) {
            possibleMovements.push({
                num:29,
                value: ((valuePieces[letterToName[table[row][i]]]) * weightPieces.eating),
                from_row: row,
                from_col: col,
                to_col: i,
                to_row: row,
            })
            break dance;
        }
    }
    //Eat col left

    for (let i = (col - 1); i >= min; i--) {
        if (turnPieces.includes(table[row][i])) {
            if (table[row][i + 1] == ' ') {
                possibleMovements.push({
                    num:30,
                    value: valuePieces.Queen,
                    from_row: row,
                    from_col: col,
                    to_col: i + 1,
                    to_row: row,
                })
            }
            break
        }
        if (counterPieces.includes(table[row][i])) {
            possibleMovements.push({
                num:31,
                value: ((valuePieces[letterToName[table[row][i]]]) * weightPieces.eating),
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

        if (turnPieces.includes(table[i][j])) {
            if (table[i - 1][j - 1] == ' ') {
                possibleMovements.push({
                    num:32,
                    value: valuePieces.Queen,
                    from_row: row,
                    from_col: col,
                    to_col: (j - 1),
                    to_row: (i - 1),
                })
            }
            break dance;
        }
        if (counterPieces.includes(table[i][j])) {
            possibleMovements.push({
                num:33,
                value: ((valuePieces[letterToName[table[i][j]]]) * weightPieces.eating),
                from_row: row,
                from_col: col,
                to_col: j,
                to_row: i,
            })
            break dance;
        }
    }

    // comer diagonal izquierda arriba
    for (let i = (row + 1), j = (col - 1); i < max && j >= min; i++, j--) {
        if (counterPieces.includes(table[i][j])) {
            possibleMovements.push({
                num:34,
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
                    num:35,
                    value: valuePieces.Queen,
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
    for (let i = (row - 1), j = (col - 1); i >= min && j >= min; i--, j--) {
        if (counterPieces.includes(table[i][j])) {
            possibleMovements.push({
                num:36,
                value: ((valuePieces[letterToName[table[i][j]]]) * weightPieces.eating),
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
                    num:37,
                    value: valuePieces.Queen,
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
    for (let i = (row - 1), j = (col + 1); i >= min && j < max; i--, j++) {
        if (turnPieces.includes(table[i][j])) {
            if (table[i + 1][j - 1] == ' ') {
                possibleMovements.push({
                    num:38,
                    value: valuePieces.Queen,
                    from_row: row,
                    from_col: col,
                    to_col: (j - 1),
                    to_row: (i + 1),
                })
            }
            break dance;
        }
        if (counterPieces.includes(table[i][j])) {

            possibleMovements.push({
                num:39,
                value: ((valuePieces[letterToName[table[i][j]]]) * weightPieces.eating),
                from_row: row,
                from_col: col,
                to_col: j,
                to_row: i,
            })
            break dance;
        }
    }
    return possibleMovements
}
module.exports.queenMoves = queenMoves;