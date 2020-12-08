const { blackPieces, whitePieces } = require("../enums/pieces")
const { letterToName } = require('../enums/letterToName')
const { valuePieces } = require("../enums/valuePieces")
const weightPieces = require("../enums/weightPieces").weightPieces
const { max, min } = require("../enums/limitsBoard")




function pawnMovesWhite(table, row, col) {

    
    let possibleMovements = []
    // Move 2 places in the first movement.
    if ((row == 13) && (table[row - 1][col] == ' ') && (table[row - 2][col] == ' ')) {

        possibleMovements.push(
            {
                num: 1,
                value: valuePieces.Pawn * weightPieces.secondRowPawn + (-0.1*(col - 7) ^ (2)),
                from_row: row,
                from_col: col,
                to_row: (row - 2),
                to_col: col
            }
        )
    }
    //si todavia no se mueve y no tiene nada en las dos filas de adelante, que se mueva 2 filas
    if ((row == 12) && (table[row - 1][col] == ' ' && table[row - 2][col] == ' ')) {

        possibleMovements.push(
            {
                num: 2,
                value: valuePieces.Pawn * weightPieces.firstRowPawn + (-0.01*(col - 7) ^ (2)),
                from_row: row,
                from_col: col,
                to_row: (row - 2),
                to_col: col
            }
        )
    }
    // Move 1 place
   /*  console.log(row-1, col)
    console.table(table) */
    if (table[row - 1][col] == ' ') {
        possibleMovements.push({
            num: 3,
            value: ((valuePieces.Pawn) * weightPieces.movingFowardPawn - ((row - 8 - 1) * 10)) + (-0.01*(col - 7) ^ (2)),
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