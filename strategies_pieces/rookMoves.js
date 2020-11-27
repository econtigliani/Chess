function rookMoves(table,row,col){
    //Row - Moves
   //Eat row
   dance:
   for (let i = (row + 1); i < max; i++) {
       if (whitePieces.includes(table[i][col])) {
           if (table[i - 1][col] == ' ') {
               possibleMovements.push({
                   num:6,
                   value: 0,
                   from_row: row,
                   from_col: col,
                   to_col: col,
                   to_row: i - 1,
               })
           }
           break dance;
       }
       if (blackPieces.includes(table[i][col])) {
           possibleMovements.push({
               num: 7,
               value: 8,
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
   for (let i = (row - 1); i > min; i--) {
       if (whitePieces.includes(table[i][col])) {
           if (table[i + 1][col] == ' ') {
               possibleMovements.push({
                   num:8,   
                   value: 8,
                   from_row: row,
                   from_col: col,
                   to_col: col,
                   to_row: i + 1,
               })
           }
           break dance;
       }
       if (blackPieces.includes(table[i][col])) {
           possibleMovements.push({
            num: 9,   
            value: 8,
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

       if (whitePieces.includes(table[row][i])) {
           if (table[row][i - 1] == ' ') {
               possibleMovements.push({
                   num:10,
                   value: 0,
                   from_row: row,
                   from_col: col,
                   to_col: i - 1,
                   to_row: row,
               })
           }
           break dance;
       }
       if (blackPieces.includes(table[row][i])) {
           possibleMovements.push({
               num: 11,
               value: 8,
               from_row: row,
               from_col: col,
               to_col: i,
               to_row: row,
           })
           break dance;
       }
   }
   //Eat col left

   for (let i = (col - 1); i > min; i--) {
       if (whitePieces.includes(table[row][i])) {
           if (table[row][i + 1] == ' ') {
               possibleMovements.push({
                   num:12,
                   value: 0,
                   from_row: row,
                   from_col: col,
                   to_col: i + 1,
                   to_row: row,
               })
           }
           break
       }
       if (blackPieces.includes(table[row][i])) {
           possibleMovements.push({
               num:13,
               value: 8,
               from_row: row,
               from_col: col,
               to_col: i,
               to_row: row,
           })
           break
       }
   }
   
}