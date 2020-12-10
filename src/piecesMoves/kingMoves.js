const { blackPieces, whitePieces } = require("../enums/pieces")
const { letterToName } = require('../enums/letterToName')
const { valuePieces } = require("../enums/valuePieces")
const weightPieces = require("../enums/weightPieces").weightPieces
const { max, min } = require("../enums/limitsBoard")
const { white } = require("../enums/colours")

function kingMoves(table, row, col, turnColor) {
       
    if (turnColor == white) {
        turnPieces = whitePieces
        counterPieces = blackPieces
    } else {
        turnPieces = blackPieces
        counterPieces = whitePieces
    }

    let possibleMovements = []
    // All possible moves of a knight 
    let X = [1, -1, 0, 0]
    let Y = [0, 0, 1, -1]


    for (let i = 0; i < 4; i++) {
        let move_row = row + X[i]
        let move_col = col + Y[i]

        // Check if each possible move is valid or not 
        if (move_row >= max || move_row < min || move_col >= max || move_col < min) {
            break
        }

        if ((table[move_row][move_col] == ' ')) {
            possibleMovements.push({
                num:40,
                value: valuePieces.King,
                from_row: row,
                from_col: col,
                to_col: move_col,
                to_row: move_row,
            })
        }
        if (counterPieces.includes(table[move_row][move_col])) {
            possibleMovements.push({
                num:41,
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
module.exports.kingMoves = kingMoves;