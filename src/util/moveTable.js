const { whitePieces, blackPieces } = require("../enums/pieces")

function moveTable(table,move) {
    const temp = table[move.from_row][move.from_col]
    // Promote
    if(temp == whitePieces[0] && move.to_row == 8){
        table[move.to_row][move.to_col] = whitePieces[4]
    } else if(temp == blackPieces[0] && move.to_row == 7){
        table[move.to_row][move.to_col] = blackPieces[4]
    }else{
        
        table[move.to_row][move.to_col] = temp
    }
    table[move.from_row][move.from_col] = ' '
    
    return table
}

module.exports = {
    moveTable: moveTable
}