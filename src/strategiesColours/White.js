const { whitePieces} = require("../enums/pieces");
const { pawnMovesWhite } = require("../piecesMoves/pawnMoves");
const { rookMoves } = require("../piecesMoves/rookMoves");
const { bishopMoves } = require("../piecesMoves/bishopMoves");
const { kingMoves } = require("../piecesMoves/kingMoves")
const { queenMoves } = require("../piecesMoves/queenMoves")
const { horseMoves } = require("../piecesMoves/horseMoves");
const { max, min } = require("../enums/limitsBoard")

function moveWhite(table) {
    let possibleMovements = []
    let temp = []
    const color = 'white'
    //itero sobre toda la table buscando mis piezas
    for (let col = min; col < max; col++) {
        for (let row = min; row < max; row++) {

            switch (table[row][col]) {

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
        }
    }
    return possibleMovements
}
module.exports.moveWhite = moveWhite