const { whitePieces} = require("../enums/pieces");
const { pawnMovesWhite } = require("../piecesMoves/pawnMoves");
const { rookMoves } = require("../piecesMoves/rookMoves");
const { bishopMoves } = require("../piecesMoves/bishopMoves");
const { kingMoves } = require("../piecesMoves/kingMoves")
const { queenMoves } = require("../piecesMoves/queenMoves")
const { horseMoves } = require("../piecesMoves/horseMoves");


function moveWhite(table) {
    let possibleMovements = []
    let temp = []
    const color = 'white'
    //itero sobre toda la table buscando mis piezas
    table.forEach((array,row) => array.forEach((element,col) => {

        switch (element) {
                case ' ':
                    break

                case whitePieces[0]://Pawn
                    temp = pawnMovesWhite(table, row, col)
                    break;

                case whitePieces[1]://Rook
                    temp = rookMoves(table, row, col, color)
                    break;

                case whitePieces[2]://Bishop
                    temp = bishopMoves(table, row, col, color)
                    break;

                case whitePieces[3]://Horse
                    temp = horseMoves(table, row, col, color)
                    break;

                case whitePieces[4]://Queen
                    temp = queenMoves(table, row, col, color)
                    break;

                case whitePieces[5]://King
                    temp = kingMoves(table, row, col, color)
                    break;

                default:
                    break;
            }
            possibleMovements = possibleMovements.concat(temp)
        }))
    return possibleMovements
}
module.exports.moveWhite = moveWhite