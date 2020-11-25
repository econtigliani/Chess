const { blackPieces, whitePieces } = require("../enums/pieces");
const { letterToName } = require('../enums/letterToName');
const { valuePieces } = require("../enums/valuePieces");
const weightPieces = require("../enums/weightPieces").weightPieces;
const max = 16;
const min = 0;
// matrix de movimientos posibles
let possibleMovementsBlack = [];

function moveBlack(board) {

    //vacio el arreglo porque tiene movimientos de la jugada anterior
    possibleMovementsBlack = [];

    //genero una matriz 
    let table;
    table = maketable(board);

    //itero sobre toda la matriz buscando mis piezas
    for (let col = min; col < max; col++) {
        for (let row = min; row < max; row++) {

            switch (table[row][col]) {

                case blackPieces[0]://Pawn
                    pawnMoves(table, row, col);
                    break;

                case blackPieces[1]://Rook
                    //rookMoves(table, row, col);
                    break;

                case blackPieces[2]://Bishop
                    //bishopMoves(table, row, col);
                    break;

                case blackPieces[3]://Horse
                    //horseMoves(table, row, col)
                    break;

                case blackPieces[4]://Queen
                    //queenMoves(table, row, col);
                    break;

                case blackPieces[5]://King
                    //kingMoves(table, row, col);
                    break;

                default:
                    break;
            }
        }
    }

    // busco cual de los resultados es el que tiene el mayor valor.
    let maxValue = 0;

    possibleMovementsBlack.forEach(pm => {
        if (pm.value >= maxValue) {
            maxValue = pm.value
        }
    })

    // guardo el indice de ese maximo
    let index = 0;
    index = possibleMovementsBlack.findIndex(s => s.value == maxValue);

    // console.log(possibleMovementsBlack)
    // console.log(matriz)

    let result;
    result = {
        value: possibleMovementsBlack[index].value,
        from_row: possibleMovementsBlack[index].from_row,
        from_col: possibleMovementsBlack[index].from_col,
        to_row: possibleMovementsBlack[index].to_row,
        to_col: possibleMovementsBlack[index].to_col,
    }


    // devuelvo un json con los datos desde y hacia del movimiento de mayor valor
    //console.log(result)
    return result;
}

function pawnMoves(table, row, col) {
    // Move 2 places in the first movement.
    if ((row == 3) && (table[row + 1][col] == ' ') && (table[row + 2][col] == ' ')) {

        possibleMovementsBlack.push({
            value: 2,
            from_row: row,
            from_col: col,
            to_row: (row + 2),
            to_col: col,
        })
    }

    if ((row == 2) && (table[row + 1][col] == ' ') && (table[row + 2][col] == ' ')) {

        possibleMovementsBlack.push({
            value: 3,
            from_row: row,
            from_col: col,
            to_row: (row + 2),
            to_col: col,
        })
    }

    // Move 1 place
    if ((table[row + 1][col] == ' ')) {
        possibleMovementsBlack.push({
            value: 1,
            from_row: row,
            from_col: col,
            to_col: col,
            to_row: (row + 1),
        })
    }

    //Eat piece
    if (whitePieces.includes(table[row + 1][col - 1])) {
        possibleMovementsBlack.push({
            value: 2,
            from_row: row,
            from_col: col,
            to_col: (col - 1),
            to_row: (row + 1),

        })
    }

    if (whitePieces.includes(table[row + 1][col + 1])) {
        possibleMovementsBlack.push({
            value: 2,
            from_row: row,
            from_col: col,
            to_col: (col + 1),
            to_row: (row + 1),

        })
    }

}

function queenMoves(table, row, col) {
    
    // Row - Moves

    //Eat row
    for (let i = (row + 1); i < max; i++) {
        if (whitePieces.includes(table[i][col])) {
            possibleMovementsBlack.push({
                value: 2,
                from_row: row,
                from_col: col,
                to_col: col,
                to_row: i,
            })
            break
        }
        if(blackPieces.includes(table[i][col])){
            /* possibleMovementsBlack.push({
                value: 0,
                from_row:row,
                from_col: col,
                to_col:col,
                to_row: i,
            }) */
            break
        }
    }
    //Eat row behind
    for (let i = (row - 1) ; i > min; i--) {
        if (whitePieces.includes(table[i][col])) {
            possibleMovementsBlack.push({
                value: 2,
                from_row: row,
                from_col: col,
                to_col: col,
                to_row: i,
            })
            break
        }
        if(blackPieces.includes(table[i][col])){
            /* possibleMovementsBlack.push({
                value: 0,
                from_row:row,
                from_col: col,
                to_col:col,
                to_row: i,
            }) */
            break
        }
    }


    //Col - Moves
    //Eat col right
    for (let i = (col + 1); i < max; i++) {
        if (whitePieces.includes(table[row][i])) {
            possibleMovementsBlack.push({
                value: 2,
                from_row: row,
                from_col: col,
                to_col: i,
                to_row: row,
            })
            break
        }
        if(blackPieces.includes(table[row][i])){
            /* possibleMovementsBlack.push({
                value: 0,
                from_row:row,
                from_col: col,
                to_col:col,
                to_row: i,
            }) */
            break
        }
    }
    //Eat col left
    for (let i = (col - 1) ; i > min; i--) {
        if (whitePieces.includes(table[row][i])) {
            possibleMovementsBlack.push({
                value: 2,
                from_row: row,
                from_col: col,
                to_col: i,
                to_row: row,
            })
            break
        }
        if(blackPieces.includes(table[row][i])){
            /* possibleMovementsBlack.push({
                value: 0,
                from_row:row,
                from_col: col,
                to_col:col,
                to_row: i,
            }) */
            break
        }
    }
 
    for (let i = (row + 1) ; i < max; i++) {
        for (let j = (col + 1); j < max; j++) {
            if (whitePieces.includes(table[i][col])) {
                possibleMovementsBlack.push({
                    value: 2,
                    from_row: row,
                    from_col: col,
                    to_col: j,
                    to_row: i,
                })
                break
            }
            if(blackPieces.includes(table[i][col])){
               /*  possibleMovementsBlack.push({
                    value: 0,
                    from_row:row,
                    from_col: col,
                    to_col: (j-1),
                    to_row: (i-1),
                }) */
                break
            }    
        }
        for (let j = (col - 1); j > min; j--) {
            if (whitePieces.includes(table[i][col])) {
                possibleMovementsBlack.push({
                    value: 2,
                    from_row: row,
                    from_col: col,
                    to_col: j,
                    to_row: i,
                })
                break
            }
            if(blackPieces.includes(table[i][col])){
               /*  possibleMovementsBlack.push({
                    value: 0,
                    from_row:row,
                    from_col: col,
                    to_col: (j-1),
                    to_row: (i-1),
                }) */
                break
            }    
        }
        
    }
    // Eat down diagonal
    for (let i = (row - 1) ; i > min; i++) {
        for (let j = (col + 1); j < max; j++) {
            if (whitePieces.includes(table[i][col])) {
                possibleMovementsBlack.push({
                    value: 2,
                    from_row: row,
                    from_col: col,
                    to_col: j,
                    to_row: i,
                })
                break
            }
            if(blackPieces.includes(table[i][col])){
               /*  possibleMovementsBlack.push({
                    value: 0,
                    from_row:row,
                    from_col: col,
                    to_col: (j-1),
                    to_row: (i-1),
                }) */
                break
            }    
        }
        for (let j = (col - 1); j > min; j--) {
            if (whitePieces.includes(table[i][col])) {
                possibleMovementsBlack.push({
                    value: 2,
                    from_row: row,
                    from_col: col,
                    to_col: j,
                    to_row: i,
                })
                break
            }
            if(blackPieces.includes(table[i][col])){
               /*  possibleMovementsBlack.push({
                    value: 0,
                    from_row:row,
                    from_col: col,
                    to_col: (j-1),
                    to_row: (i-1),
                }) */
                break
            }    
        }
        
    }

}
    //read board
    function maketable(board) {

        let index = 0;
        let matrix = [];

        for (let i = min; i < max; i++) {
            let row = [];
            for (let j = min; j < max; j++) {
                row.push(board[index]);
                index++;
            }
            matrix.push(row)
        }


        return matrix;
    }

    module.exports.moveBlack = moveBlack;
