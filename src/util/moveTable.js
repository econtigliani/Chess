const { whitePieces, blackPieces } = require("../enums/pieces")

function moveTable(table,move) {
    const temp = table[move.from_row][move.from_col]
    let newtable = table
    // Promote
    if(temp == whitePieces[0] && move.to_row == 8){
        newtable[move.to_row][move.to_col] = whitePieces[4]
    } else if(temp == blackPieces[0] && move.to_row == 7){
        newtable[move.to_row][move.to_col] = blackPieces[4]
    }else{
        
        newtable[move.to_row][move.to_col] = temp
    }
    newtable[move.from_row][move.from_col] = ' '
    
    return newtable
}

module.exports = {
    moveTable: moveTable
}