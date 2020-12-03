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
    const color = 'white'
    //itero sobre toda la table buscando mis piezas
    for (let col = min; col < max; col++) {
        for (let row = min; row < max; row++) {

            switch (table[row][col]) {

                case whitePieces[0]://Pawn
                    possibleMovements = possibleMovements.concat(pawnMovesWhite(table, row, col))
                    break;

                case whitePieces[1]://Rook
                    possibleMovements = possibleMovements.concat(rookMoves(table, row, col, color))
                    break;

                case whitePieces[2]://Bishop
                    possibleMovements = possibleMovements.concat(bishopMoves(table, row, col, color))
                    break;

                case whitePieces[3]://Horse
                    possibleMovements = possibleMovements.concat(horseMoves(table, row, col, color))
                    break;

                case whitePieces[4]://Queen
                    possibleMovements = possibleMovements.concat(queenMoves(table, row, col, color))
                    break;

                case whitePieces[5]://King
                    possibleMovements = possibleMovements.concat(kingMoves(table, row, col, color))
                    break;

                default:
                    break;
            }
        }
    }
    return possibleMovements
}
module.exports.moveWhite = moveWhite