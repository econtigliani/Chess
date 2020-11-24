const { blackPieces, whitePieces } = require("../enums/pieces");
const { letterToName } = require('../enums/letterToName');
const { valuePieces } = require("../enums/valuePieces");
const weightPieces = require("../enums/weightPieces").weightPieces;

// matrix de movimientos posibles
let possibleMovementsBlack = [];

function moveBlack(board) {

    //vacio el arreglo porque tiene movimientos de la jugada anterior
    possibleMovementsBlack = [ ];

    //genero una matriz 
    let table;
         table = maketable(board);
    
    //itero sobre toda la matriz buscando mis piezas
    for(let col = 0; col < 16; col++){
        for(let row = 0; row < 16; row++){

            switch (table[row][col]){

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
    let max = 0; 

    possibleMovementsBlack.forEach(pm => {
        if (pm.value >= max){
            max = pm.value
        }
    })

    // guardo el indice de ese maximo
    let index = 0;
    index = possibleMovementsBlack.findIndex( s => s.value == max);

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

function pawnMoves(table,row,col){
    // Move 2 places in the first movement.
    if((row == 3 ) && (table[row + 1][col] == ' ') && (table[row + 2][col] == ' ')){

        possibleMovementsBlack.push({
            value: 2,
            from_row: row,
            from_col: col,
            to_row: (row + 2),
            to_col: col,
        })
    }

    if( (row == 2 ) && (table[row + 1][col] == ' ') && (table[row + 2][col] == ' ')){

        possibleMovementsBlack.push({
            value: 3,
            from_row: row,
            from_col: col,
            to_row: (row + 2),
            to_col: col,
        })
    }

    // Move 1 place
    if((table[row + 1][col] == ' ')) {
        possibleMovementsBlack.push({
            value: 1,
            from_row: row,
            from_col: col,
            to_col: col,
            to_row: (row +1),
        })
    }

    //Eat piece
      if(whitePieces.includes(table[row + 1][col - 1])) {
        possibleMovementsBlack.push({
            value: 2,
            from_row: row,
            from_col: col,
            to_col: (col - 1),
            to_row: (row + 1),

        })
    }

    if(whitePieces.includes(table[row + 1][col + 1])) {
        possibleMovementsBlack.push({
            value: 2,
            from_row: row,
            from_col: col,
            to_col: (col + 1),
            to_row: (row + 1),

        })
    }  

}

function queenMoves(table,row,col){
    //Eat row
    for (let i = 0; i <16 ; i++) {
        
        
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

module.exports.moveBlack = moveBlack;
