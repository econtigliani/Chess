const { max, min } = require("../enums/limitsBoard")
const { whitePieces, blackPieces } = require("../enums/pieces");
const { pawnMovesBlack, pawnMovesWhite } = require("../strategies_pieces/pawnMoves");
const { rookMoves } = require("../strategies_pieces/rookMoves");
const { bishopMoves }= require("../strategies_pieces/bishopMoves");
const { kingMoves } = require("../strategies_pieces/kingMoves")
const { queenMoves } = require("../strategies_pieces/queenMoves")
const { horseMoves } = require("../strategies_pieces/horseMoves");


function moveColor(board,colour){


    //vacio el arreglo porque tiene movimientos de la jugada anterior
   let possibleMovements = []

    //genero una matriz 
    let table
    table = maketable(board)

    if (colour == 'white') {
   possibleMovements= moveWhite(table)        
    } else {
   possibleMovements= moveBlack(table)
    }

console.log(possibleMovements)
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

console.log(possibleMovements)
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

function moveBlack(table) {
    let possibleMovements = []
    //itero sobre toda la table buscando mis piezas
    for (let col = min; col < max; col++) {
        for (let row = min; row < max; row++) {

            switch (table[row][col]) {

                case blackPieces[0]://Pawn
                possibleMovements.push(pawnMovesBlack(table, row, col))
                    break

                case blackPieces[1]://Rook
                possibleMovements.push(rookMoves(table, row, col, 'black'))
                    break

                case blackPieces[2]://Bishop
                possibleMovements.push(bishopMoves(table, row, col, 'black'))
                    break;

                case blackPieces[3]://Horse
                possibleMovements.push(horseMoves(table, row, col, 'black'))
                    break

                case blackPieces[4]://Queen
                possibleMovements.push(queenMoves(table, row, col, 'black'))
                    break

                case blackPieces[5]://King
                possibleMovements.push(kingMoves(table, row, col, 'black'))
                    break

                default:
                    break
            }
        }
    }
  return possibleMovements
}

function moveWhite(table) {
    let possibleMovements = []
    //itero sobre toda la table buscando mis piezas
    for(let col = min; col < max; col++){
        for(let row = min; row < max; row++){

            switch (table[row][col]){

                case whitePieces[0]://Pawn
                possibleMovements.push(pawnMovesWhite(table, row, col))
                    break;

                case whitePieces[1]://Rook
                possibleMovements.push(rookMoves(table, row, col, 'white'))
                    break;

                case whitePieces[2]://Bishop
                possibleMovements.push(bishopMoves(table, row, col, 'white'))
                    break;

                case whitePieces[3]://Horse
                possibleMovements.push(horseMoves(table, row, col, 'white'))
                    break;

                case whitePieces[4]://Queen
                possibleMovements.push(queenMoves(table, row, col, 'white'))
                    break;

                case whitePieces[5]://King
                possibleMovements.push(kingMoves(table, row, col, 'white'))
                    break;

                default:
                    break;
            }
        }
    }
  return possibleMovements
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

module.exports.moveColor = moveColor;