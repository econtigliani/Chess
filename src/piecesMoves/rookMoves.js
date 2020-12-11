const { blackPieces, whitePieces } = require("../enums/pieces")
const { letterToName } = require('../enums/letterToName')
const { valuePieces } = require("../enums/valuePieces")
const weightPieces = require("../enums/weightPieces").weightPieces
const { max, min } = require("../enums/limitsBoard")
const white = 'white'

function rookMoves(table,row,col, turnColor){
       
    if (turnColor == white) {
        turnPieces = whitePieces
        counterPieces = blackPieces
    } else {
        turnPieces = blackPieces
        counterPieces = whitePieces
    }

    let possibleMovements = [];
    
    // Imagine the board with the black pieces behind

    /* Row - Moves */
   
    MovesUp:
   for (let i = (row + 1); i < max; i++) {
       if (turnPieces.includes(table[i][col])) {
           if (table[i - 1][col] == ' ') {
               possibleMovements.push({
                   num:6,
                   value: valuePieces.Rook,
                   from_row: row,
                   from_col: col,
                   to_col: col,
                   to_row: i - 1,
               })
           }
           break MovesUp
       }
       if (counterPieces.includes(table[i][col])) {
           possibleMovements.push({
               num: 7,
               value: ((valuePieces[letterToName[table[i][col]]]) * weightPieces.eating),
               from_row: row,
               from_col: col,
               to_col: col,
               to_row: i,
           })
           break MovesUp
       }
   }

   MovesDown:
   for (let i = (row - 1); i >= min; i--) {
       if (turnPieces.includes(table[i][col])) {
           if (table[i + 1][col] == ' ') {
               possibleMovements.push({
                   num:8,   
                   value: valuePieces.Rook,
                   from_row: row,
                   from_col: col,
                   to_col: col,
                   to_row: i + 1,
               })
           }
           break MovesDown
       }
       if (counterPieces.includes(table[i][col])) {
           possibleMovements.push({
            num: 9,   
            value: ((valuePieces[letterToName[table[i][col]]]) * weightPieces.eating),
               from_row: row,
               from_col: col,
               to_col: col,
               to_row: i,
           })
           break MovesDown
       }
   }

   /* Col - Moves */

   MovesRight:
   for (let i = (col + 1); i < max; i++) {
       if (turnPieces.includes(table[row][i])) {
           if (table[row][i - 1] == ' ') {
               possibleMovements.push({
                   num:10,
                   value: valuePieces.Rook,
                   from_row: row,
                   from_col: col,
                   to_col: (i - 1),
                   to_row: row,
               })
           }
           break MovesRight
       }
       if (counterPieces.includes(table[row][i])) {
           possibleMovements.push({
               num: 11,
               value: ((valuePieces[letterToName[table[row][i]]]) * weightPieces.eating),
               from_row: row,
               from_col: col,
               to_col: i,
               to_row: row,
           })
           break MovesRight
       }
   }

   MovesLeft:
   for (let i = (col - 1); i >= min; i--) {
       if (turnPieces.includes(table[row][i])) {
           if (table[row][i + 1] == ' ') {
               possibleMovements.push({
                   num:12,
                   value: valuePieces.Rook,
                   from_row: row,
                   from_col: col,
                   to_col: i + 1,
                   to_row: row,
               })
           }
           break MovesLeft
       }
       if (counterPieces.includes(table[row][i])) {
           possibleMovements.push({
               num:13,
               value: ((valuePieces[letterToName[table[row][i]]]) * weightPieces.eating),
               from_row: row,
               from_col: col,
               to_col: i,
               to_row: row,
           })
           break MovesLeft
       }
   }
   return possibleMovements
}
module.exports.rookMoves = rookMoves;