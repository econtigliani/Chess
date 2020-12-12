const { pawnMovesBlack } = require("../piecesMoves/pawnMoves");
const { rookMoves } = require("../piecesMoves/rookMoves");
const { bishopMoves } = require("../piecesMoves/bishopMoves");
const { kingMoves } = require("../piecesMoves/kingMoves")
const { queenMoves } = require("../piecesMoves/queenMoves")
const { horseMoves } = require("../piecesMoves/horseMoves");
const { blackPieces } = require("../enums/pieces");
const { colours } = require("../enums/colours");


function moveBlack(table) {

    let possibleMovements = []
    let temp = []
    
    table.forEach((array, row) => array.forEach((element, col) => {

        switch (element) {
            case ' ':
                temp = []
                break

            case blackPieces[0]://Pawn
                temp = pawnMovesBlack(table, row, col)
                break

            case blackPieces[1]://Rook
                temp = rookMoves(table, row, col, colours.black)
                break

            case blackPieces[2]://Bishop
                temp = bishopMoves(table, row, col, colours.black)
                break;

            case blackPieces[3]://Horse
                temp = horseMoves(table, row, col, colours.black)
                break

            case blackPieces[4]://Queen
                temp = queenMoves(table, row, col, colours.black)
                break

            case blackPieces[5]://King
                temp = kingMoves(table, row, col, colours.black)
                break

            default:
                temp = []
                break
        }
        possibleMovements = possibleMovements.concat(temp)
    }))

    return possibleMovements
}

module.exports.moveBlack = moveBlack