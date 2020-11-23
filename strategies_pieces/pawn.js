function pawnMoves(table,row,col){
    // Move 2 places in the first movement.
    if((row == 3 || row == 2 ) && (table[row + 1][col] == ' ') && (table[row + 2][col] == ' ')){

        possibleMovementsBlack.push({
            value: 0,
            from_row: row,
            from_col: col,
            to_row: (row + 2),
            to_col: col,
        })
    }

    // Move 1 place
    if((table[row + 1][col] == ' ')) {
        possibleMovementsBlack.push({
            value: 0,
            from_row: row,
            from_col: col,
            to_col: col,
            to_row: (row +1),
        })
    }

    //Eat piece
    if(whitePieces.includes(table[row + 1][col - 1])) {
        possibleMovementsBlack.push({
            value: 0,
            from_row: row,
            from_col: col,
            to_col: (col + 1),
            to_row: (row + 1),

        })
    }

    if(whitePieces.includes(table[row+1][col-1])) {
        possibleMovementsBlack.push({
            value: 0,
            from_row: row,
            from_col: col,
            to_col: (col - 1),
            to_row: (row + 1),

        })
    }

}

module.exports.movePawn = movePawn;