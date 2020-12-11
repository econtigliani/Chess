const { blackPieces, whitePieces } = require("../enums/pieces")
const { letterToName } = require('../enums/letterToName')
const { valuePieces } = require("../enums/valuePieces")
const weightPieces = require("../enums/weightPieces").weightPieces




function pawnMovesWhite(table, row, col) {

    let possibleMovements = []

    // Move 2 places in the first movement.
    if ((row == 13) && (table[row - 1][col] == ' ') && (table[row - 2][col] == ' ')) {

        possibleMovements.push(
            {
                num: 1,
                value: valuePieces.Pawn * weightPieces.secondRowPawn,
                from_row: row,
                from_col: col,
                to_row: (row - 2),
                to_col: col
            }
        )
    }

    //Move 2 places in the first movement of the second line.
    if ((row == 12) && (table[row - 1][col] == ' ' && table[row - 2][col] == ' ')) {

        possibleMovements.push(
            {
                num: 2,
                value: valuePieces.Pawn * weightPieces.firstRowPawn,
                from_row: row,
                from_col: col,
                to_row: (row - 2),
                to_col: col
            }
        )
    }

    // Move 1 place
    if (table[row - 1][col] == ' ') {
        possibleMovements.push({
            num: 3,
            value: ((valuePieces.Pawn) * weightPieces.movingFowardPawn - ((row - 8 - 1) * 10)),
            from_row: row,
            from_col: col,
            to_col: col,
            to_row: (row - 1),
        })
    }

    //Promote
    if ((table[row - 1][col] == ' ') && row == 9) {
        possibleMovements.push({
            num: 300,
            value: 500,
            from_row: row,
            from_col: col,
            to_col: col,
            to_row: (row - 1),
        })
    }


    //Eat piece
    if (blackPieces.includes(table[row - 1][col + 1])) {
        possibleMovements.push({
            num: 4,
            value: ((valuePieces[letterToName[table[row - 1][col + 1]]]) * weightPieces.eating),
            from_row: row,
            from_col: col,
            to_col: (col + 1),
            to_row: (row - 1),

        })
    }
    if (blackPieces.includes(table[row - 1][col - 1])) {
        possibleMovements.push({
            num: 5,
            value: ((valuePieces[letterToName[table[row - 1][col - 1]]]) * weightPieces.eating),
            from_row: row,
            from_col: col,
            to_col: (col - 1),
            to_row: (row - 1),

        })
    }
    return possibleMovements
}


function pawnMovesBlack(table, row, col) {
    let possibleMovements = []

    // Move 2 places in the first movement.
    if ((row == 3) && (table[row + 1][col] == ' ') && (table[row + 2][col] == ' ')) {

        possibleMovements.push({
            value: valuePieces.Pawn * weightPieces.firstRowPawn,
            from_row: row,
            from_col: col,
            to_row: (row + 2),
            to_col: col,
        })
    }

    //Move 2 places in the first movement of the second line.
    if ((row == 2) && (table[row + 1][col] == ' ') && (table[row + 2][col] == ' ')) {

        possibleMovements.push({
            value: valuePieces.Pawn * weightPieces.secondRowPawn,
            from_row: row,
            from_col: col,
            to_row: (row + 2),
            to_col: col,
        })
    }

    // Move 1 place
    if ((table[row + 1][col] == ' ')) {
        possibleMovements.push({
            value: ((valuePieces.Pawn) * weightPieces.movingFowardPawn - ((7 - row - 1) * 10)),
            from_row: row,
            from_col: col,
            to_col: col,
            to_row: (row + 1),
        })
    }

    //Promote
    if ((table[row + 1][col] == ' ') && row == 6) {
        possibleMovements.push({
            value: 500,
            from_row: row,
            from_col: col,
            to_col: col,
            to_row: (row + 1),
        })
    }

    //Eat piece
    if (whitePieces.includes(table[row + 1][col - 1])) {
        possibleMovements.push({
            value: ((valuePieces[letterToName[table[row + 1][col - 1]]]) * weightPieces.eating),
            from_row: row,
            from_col: col,
            to_col: (col - 1),
            to_row: (row + 1),

        })
    }

    if (whitePieces.includes(table[row + 1][col + 1])) {
        possibleMovements.push({
            value: ((valuePieces[letterToName[table[row + 1][col + 1]]]) * weightPieces.eating),
            from_row: row,
            from_col: col,
            to_col: (col + 1),
            to_row: (row + 1),

        })
    }
    return possibleMovements;
}

module.exports = {
    pawnMovesBlack: pawnMovesBlack,
    pawnMovesWhite: pawnMovesWhite,
}