
const { blackPieces, whitePieces } = require("../enums/pieces")
const { letterToName } = require('../enums/letterToName')
const { valuePieces } = require("../enums/valuePieces")
const weightPieces = require("../enums/weightPieces").weightPieces
const { max, min } = require("../enums/limitsBoard")
const { white } = require("../enums/colours")

function bishopMoves(table,row,col,turnColor){
    
    if (turnColor == white) {
        turnPieces = whitePieces
        counterPieces = blackPieces
    } else {
        turnPieces = blackPieces
        counterPieces = whitePieces
    }

    let possibleMovements = [];

    MoveUpRight:
    for (let i = (row + 1), j = (col + 1); i < max && j < max; i++, j++) {

        if (counterPieces.includes(table[i][j])) {
            possibleMovements.push({
                num: 14,
                value: ((valuePieces[letterToName[table[i][j]]]) * weightPieces.eating),
                from_row: row,
                from_col: col,
                to_col: j,
                to_row: i,
            })
            break MoveUpRight
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
            break MoveUpRight
        }
    }

    MoveUpLeft:
    for (let i = (row + 1), j = (col - 1); i < max && j >= min; i++, j--) {
        if (counterPieces.includes(table[i][j])) {
            possibleMovements.push({
                num: 16,
                value: ((valuePieces[letterToName[table[i][j]]]) * weightPieces.eating),
                from_row: row,
                from_col: col,
                to_col: j,
                to_row: i,
            })
            break MoveUpLeft
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
            break MoveUpLeft
        }
    }
    
    MoveDownLeft:
    for (let i = (row - 1), j = (col - 1); i >= min && j >= min; i--, j--) {
        if (counterPieces.includes(table[i][j])) {
            possibleMovements.push({
                num: 18,
                value: ((valuePieces[letterToName[table[i][j]]]) * weightPieces.eating),
                from_row: row,
                from_col: col,
                to_col: j,
                to_row: i,
            })
            break MoveDownLeft
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
            break MoveDownLeft
        }
    }
    
    MoveDownRight:
    for (let i = (row - 1), j = (col + 1); i >= min && j < max; i--, j++) {
        if (counterPieces.includes(table[i][j])) {

            possibleMovements.push({
                num: 20,
                value: ((valuePieces[letterToName[table[i][j]]]) * weightPieces.eating),
                from_row: row,
                from_col: col,
                to_col: j,
                to_row: i,
            })
            break MoveDownRight
        }
        if (turnPieces.includes(table[i][j])) {
            if (table[i + 1][j - 1] == ' ') {
                possibleMovements.push({
                    num: 21,
                    value: valuePieces.Bishop,
                    from_row: row,
                    from_col: col,
                    to_col: (j - 1),
                    to_row: (i + 1),
                })
            }
            break MoveDownRight
        }
    }
    return possibleMovements;
}

module.exports.bishopMoves = bishopMoves;