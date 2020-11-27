const { blackPieces, whitePieces } = require("../enums/pieces")
const { letterToName } = require('../enums/letterToName')
const { valuePieces } = require("../enums/valuePieces")
const weightPieces = require("../enums/weightPieces").weightPieces
const max = 16
const min = 0

// matrix de movimientos posibles
let possibleMovements = [];

function moveWhite(board) {

    //vacio el arreglo porque tiene movimientos de la jugada anterior
    //console.log(possibleMovements)
    possibleMovements = []

    //genero una table 
    let table
         table = maketable(board)
    
    //itero sobre toda la table buscando mis piezas
    for(let col = 0; col < 16; col++){
        for(let row = 0; row < 16; row++){

            switch (table[row][col]){

                case whitePieces[0]://Pawn
                    pawnMoves(table, row, col);
                    break;

                case whitePieces[1]://Rook
                    rookMoves(table, row, col);
                    break;

                case whitePieces[2]://Bishop
                    bishopMoves(table, row, col);
                    break;

                case whitePieces[3]://Horse
                    horseMoves(table, row, col)
                    break;

                case whitePieces[4]://Queen
                    queenMoves(table, row, col);
                    break;

                case whitePieces[5]://King
                    kingMoves(table, row, col);
                    break;

                default:
                    break;
            }
        }
    }

    // busco cual de los resultados es el que tiene el mayor valor.
    let maxValue = 0; 

    possibleMovements.forEach(pm => {
        if (pm.value >= maxValue){
            maxValue = pm.value
        }
    })

    // guardo el indice de ese maximo
    let index = 0;
    index = possibleMovements.findIndex( s => s.value == maxValue);

    //console.log(possibleMovements)
    console.table(table)
    
    let result;
        result = {
            num: possibleMovements[index].num,
            value: possibleMovements[index].value,
            from_row: possibleMovements[index].from_row,
            from_col: possibleMovements[index].from_col,
            to_row: possibleMovements[index].to_row,
            to_col: possibleMovements[index].to_col,
        }
    

    // devuelvo un json con los datos desde y hacia del movimiento de mayor valor
    console.log("result: ", result)
    return result;
}

function pawnMoves(table,row,col){
    // Move 2 places in the first movement.
    if((row == 12) && (table[row-1][col] == ' ') && (table[row-2][col] == ' ') ){

        possibleMovements.push(
            {
                num:1,
                value: 2,
                from_row: row,
                from_col: col,
                to_row: (row-2),
                to_col: col
            }
        )
    }       
     //si todavia no se mueve y no tiene nada en las dos filas de adelante, que se mueva 2 filas
     if((row == 12 ) && (table[row-1][col] == ' '  && table[row-2][col] == ' ' )){

        possibleMovements.push(
            {
                num:2,
                value: 2,
                from_row: row,
                from_col: col,
                to_row: (row-2),
                to_col: col
            }
        )
    }
    // Move 1 place
    if((table[row - 1][col] == ' ')) {
        possibleMovements.push({
            num:3,
            value: 1,
            from_row: row,
            from_col: col,
            to_col: col,
            to_row: (row - 1),
        })
    }

    //Eat piece
     if(blackPieces.includes(table[row - 1][col + 1])) {
        possibleMovements.push({
            num:4,
            value: 2,
            from_row: row,
            from_col: col,
            to_col: (col + 1),
            to_row: (row - 1),

        })
    } 
    if(blackPieces.includes(table[row - 1][col - 1])) {
        possibleMovements.push({
            num:5,
            value: 0,
            from_row: row,
            from_col: col,
            to_col: (col - 1),
            to_row: (row - 1),

        })
    } 

}

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

function bishopMoves(table,row,col){
    for (let i = (row + 1), j = (col + 1); i < max && j < max; i++, j++) {

        if (blackPieces.includes(table[i][j])) {
            possibleMovements.push({
                num:14,
                value: 8,
                from_row: row,
                from_col: col,
                to_col: j,
                to_row: i,
            })
            break
        }
        if (whitePieces.includes(table[i][j])) {
            if (table[i - 1][j - 1] == ' ') {
                possibleMovements.push({
                    num: 15,
                    value: 0,
                    from_row: row,
                    from_col: col,
                    to_col: (j - 1),
                    to_row: (i - 1),
                })
            }
            break
        }
    }

    // comer diagonal izquierda arriba
    for (let i = (row + 1), j = (col - 1); i < max && j > min; i++, j--) {
        if (blackPieces.includes(table[i][j])) {
            possibleMovements.push({
                num: 16,
                value: 7,
                from_row: row,
                from_col: col,
                to_col: j,
                to_row: i,
            })
            break
        }
        if (whitePieces.includes(table[i][j])) {
            if (table[i - 1][j + 1] == ' ') {
                possibleMovements.push({
                    num: 17,
                    value: 0,
                    from_row: row,
                    from_col: col,
                    to_col: (j + 1),
                    to_row: (i - 1),
                })
            }
            break
        }
    }
    //eat diagonal izquierda abajo
    for (let i = (row - 1), j = (col - 1); i > min && j > min; i--, j--) {
        if (blackPieces.includes(table[i][j])) {
            possibleMovements.push({
                num: 18,
                value: 7,
                from_row: row,
                from_col: col,
                to_col: j,
                to_row: i,
            })
            break
        }
        if (whitePieces.includes(table[i][col])) {
            if (table[i + 1][j + 1] == ' ') {
                possibleMovements.push({
                    num: 19,
                    value: 0,
                    from_row: row,
                    from_col: col,
                    to_col: (j + 1),
                    to_row: (i + 1),
                })
            }
            break
        }
    }
    //eat diagonal derecha abajo
    for (let i = (row - 1), j = (col + 1); i > min && j < max; i--, j++) {
        if (blackPieces.includes(table[i][j])) {

            possibleMovements.push({
                num:20,
                value: 7,
                from_row: row,
                from_col: col,
                to_col: j,
                to_row: i,
            })
            break
        }
        if (whitePieces.includes(table[i][j])) {
            if (table[i + 1][j - 1] == ' ') {
                possibleMovements.push({
                    num:21,
                    value: 0,
                    from_row: row,
                    from_col: col,
                    to_col: (j - 1),
                    to_row: (i + 1),
                })
            }
            break
        }
    }
}

function horseMoves(table, row, col) {
    // All possible moves of a knight 
    let X = [2, 1, -1, -2, -2, -1, 1, 2]
    let Y = [1, 2, 2, 1, -1, -2, -2, -1]

    dance:
    for (let i = 0; i < 8; i++) {
        let move_row = row + X[i]
        let move_col = col + Y[i]
        // Check if each possible move is valid or not 
        if ((move_row >= max || move_row <= min) || (move_col >= max || move_col <= min)) {
            break dance;
        }

        if ((table[move_row][move_col] == ' ')) {
            possibleMovements.push({
                num:22,
                value: 0,
                from_row: row,
                from_col: col,
                to_col: move_col,
                to_row: move_row,
            })
        }
        if (blackPieces.includes(table[move_row][move_col])) {
            possibleMovements.push({
                num:23,
                value: 4,
                from_row: row,
                from_col: col,
                to_col: move_col,
                to_row: move_row,
            })
        }

    }
}

function queenMoves(table, row, col) {
    //Row - Moves
    //Eat row
    dance:
    for (let i = (row + 1); i < max; i++) {
        if (whitePieces.includes(table[i][col])) {
            if (table[i - 1][col] == ' ') {
                possibleMovements.push({
                    num:24,
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
                num:25,
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
                    num:26,
                    value: 0,
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
                num:27,
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
                    num:28,
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
                num:29,
                alue: 8,
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
                    num:30,
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
                num:31,
                value: 8,
                from_row: row,
                from_col: col,
                to_col: i,
                to_row: row,
            })
            break
        }
    }

    dance:
    for (let i = (row + 1), j = (col + 1); i < max && j < max; i++, j++) {

        if (whitePieces.includes(table[i][j])) {
            if (table[i - 1][j - 1] == ' ') {
                possibleMovements.push({
                    num:32,
                    value: 0,
                    from_row: row,
                    from_col: col,
                    to_col: (j - 1),
                    to_row: (i - 1),
                })
            }
            break dance;
        }
        if (blackPieces.includes(table[i][j])) {
            possibleMovements.push({
                num:33,
                value: 7,
                from_row: row,
                from_col: col,
                to_col: j,
                to_row: i,
            })
            break dance;
        }
    }

    // comer diagonal izquierda arriba
    for (let i = (row + 1), j = (col - 1); i < max && j > min; i++, j--) {
        if (blackPieces.includes(table[i][j])) {
            possibleMovements.push({
                num:34,
                value: 7,
                from_row: row,
                from_col: col,
                to_col: j,
                to_row: i,
            })
            break
        }
        if (whitePieces.includes(table[i][j])) {
            if (table[i - 1][j + 1] == ' ') {
                possibleMovements.push({
                    num:35,
                    value: 0,
                    from_row: row,
                    from_col: col,
                    to_col: (j + 1),
                    to_row: (i - 1),
                })
            }
            break
        }
    }
    //eat diagonal izquierda abajo
    for (let i = (row - 1), j = (col - 1); i > min && j > min; i--, j--) {
        if (blackPieces.includes(table[i][j])) {
            possibleMovements.push({
                num:36,
                value: 7,
                from_row: row,
                from_col: col,
                to_col: j,
                to_row: i,
            })
            break
        }
        if (whitePieces.includes(table[i][col])) {
            if (table[i + 1][j + 1] == ' ') {
                possibleMovements.push({
                    num:37,
                    value: 0,
                    from_row: row,
                    from_col: col,
                    to_col: (j + 1),
                    to_row: (i + 1),
                })
            }
            break
        }
    }
    //eat diagonal derecha abajo
    dance:
    for (let i = (row - 1), j = (col + 1); i > min && j < max; i--, j++) {
        if (whitePieces.includes(table[i][j])) {
            if (table[i + 1][j - 1] == ' ') {
                possibleMovements.push({
                    num:38,
                    value: 0,
                    from_row: row,
                    from_col: col,
                    to_col: (j - 1),
                    to_row: (i + 1),
                })
            }
            break dance;
        }
        if (blackPieces.includes(table[i][j])) {

            possibleMovements.push({
                num:39,
                value: 7,
                from_row: row,
                from_col: col,
                to_col: j,
                to_row: i,
            })
            break dance;
        }
    }
}

function kingMoves(table, row, col) {

    // All possible moves of a knight 
    let X = [1, -1, 0, 0]
    let Y = [0, 0, 1, -1]


    for (let i = 0; i < 4; i++) {
        let move_row = row + X[i]
        let move_col = col + Y[i]

        // Check if each possible move is valid or not 
        if (move_row >= max || move_row <= min || move_col >= max || move_col <= min) {
            break
        }

        if ((table[move_row][move_col] == ' ')) {
            possibleMovements.push({
                num:40,
                value: 0,
                from_row: row,
                from_col: col,
                to_col: move_col,
                to_row: move_row,
            })
        }
        if (blackPieces.includes(table[move_row][move_col])) {
            possibleMovements.push({
                num:41,
                value: 1,
                from_row: row,
                from_col: col,
                to_col: move_col,
                to_row: move_row,
            })
        }
    }

}




//read board
function maketable(board){

    let index = 0;
    let matrix = [];

    for (let i = 0; i < 16; i++){
        let row = [];
        for(let j = 0; j<16; j++){
            row.push(board[index]);
            index++;
        }
        matrix.push(row)
    }


    return matrix;
}

module.exports.moveWhite = moveWhite;
