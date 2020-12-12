const { blackPieces, whitePieces } = require("../enums/pieces")
const { letterToName } = require('../enums/letterToName')
const { valuePieces } = require("../enums/valuePieces")
const weightPieces = require("../enums/weightPieces").weightPieces
const { max, min } = require("../enums/limitsBoard")
const { colours } = require("../enums/colours")

function horseMoves(table, row, col, turnColor) {
    if (turnColor == colours.white) {
        turnPieces = whitePieces
        counterPieces = blackPieces
    } else {
        turnPieces = blackPieces
        counterPieces = whitePieces
    }

    let possibleMovements = []
    // All possible moves of a knight 
    let X = [2, 1, -1, -2, -2, -1, 1, 2]
    let Y = [1, 2, 2, 1, -1, -2, -2, -1]

    dance:
    for (let i = 0; i < 8; i++) {
        let move_row = row + X[i]
        let move_col = col + Y[i]
        // Check if each possible move is valid or not 
        if ((move_row >= max || move_row < min) || (move_col >= max || move_col < min)) {
            break dance;
        }

        if ((table[move_row][move_col] == ' ')) {
            possibleMovements.push({
                num: 22,
                value: valuePieces.Horse,
                from_row: row,
                from_col: col,
                to_col: move_col,
                to_row: move_row,
            })
        }
        if (counterPieces.includes(table[move_row][move_col])) {
            possibleMovements.push({
                num: 23,
                value: ((valuePieces[letterToName[table[move_row][move_col]]]) * weightPieces.eating),
                from_row: row,
                from_col: col,
                to_col: move_col,
                to_row: move_row,
            })
        }

    }
    return possibleMovements
}
module.exports.horseMoves = horseMoves;