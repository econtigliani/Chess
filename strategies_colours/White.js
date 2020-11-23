const { blackPieces, whitePieces } = require("../enums/pieces");
const { letterToName } = require('../enums/letterToName');
const { valuePieces } = require("../enums/valuePieces");
const weightPieces = require("../enums/weightPieces").weightPieces;

// matrix de movimientos posibles
let possibleMovementsWhite = [];

function moveWhite(board) {

    //vacio el arreglo porque tiene movimientos de la jugada anterior
    //console.log(possibleMovementsWhite)
    possibleMovementsWhite = [ ]

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
                    //rookMoves(table, row, col);
                    break;

                case whitePieces[2]://Bishop
                    //bishopMoves(table, row, col);
                    break;

                case whitePieces[3]://Horse
                    //horseMoves(table, row, col)
                    break;

                case whitePieces[4]://Queen
                    //queenMoves(table, row, col);
                    break;

                case whitePieces[5]://King
                    //kingMoves(table, row, col);
                    break;

                default:
                    break;
            }
        }
    }

    // busco cual de los resultados es el que tiene el mayor valor.
    let max = 0; 

    possibleMovementsWhite.forEach(pm => {
        if (pm.value >= max){
            max = pm.value
        }
    })

    // guardo el indice de ese maximo
    let index = 0;
    index = possibleMovementsWhite.findIndex( s => s.value == max);

    //console.log(possibleMovementsWhite)
    // console.log(table)

    let result;
        result = {
            value: possibleMovementsWhite[index].value,
            from_row: possibleMovementsWhite[index].from_row,
            from_col: possibleMovementsWhite[index].from_col,
            to_row: possibleMovementsWhite[index].to_row,
            to_col: possibleMovementsWhite[index].to_col,
        }
    

    // devuelvo un json con los datos desde y hacia del movimiento de mayor valor
    // console.log("result: ", result)
    return result;
}

function pawnMoves(table,row,col){
    // Move 2 places in the first movement.
    if((row == 12) && (table[row-1][col] == ' ') && (table[row-2][col] == ' ') ){

        possibleMovementsWhite.push(
            {
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

        possibleMovementsWhite.push(
            {
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
        possibleMovementsWhite.push({
            value: 1,
            from_row: row,
            from_col: col,
            to_col: col,
            to_row: (row - 1),
        })
    }

    //Eat piece
    /* if(blackPieces.includes(table[row - 1][col + 1])) {
        possibleMovementsWhite.push({
            value: 2,
            from_row: row,
            from_col: col,
            to_col: (col + 1),
            to_row: (row - 1),

        })
    } 
    if(blackPieces.includes(table[row - 1][col - 1])) {
        possibleMovementsWhite.push({
            value: 0,
            from_row: row,
            from_col: col,
            to_col: (col - 1),
            to_row: (row - 1),

        })
    } */

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
