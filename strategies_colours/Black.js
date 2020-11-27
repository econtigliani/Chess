import { blackPieces, whitePieces } from "../enums/pieces";
import { letterToName } from '../enums/letterToName';
import { valuePieces } from "../enums/valuePieces";

import { weightPieces } from "../enums/weightPieces";
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
                    pawnMoves(table, row, col)
                    break

                case blackPieces[1]://Rook
                    rookMoves(table, row, col)
                    break

                case blackPieces[2]://Bishop
                    //bishopMoves(table, row, col)
                    break;

                case blackPieces[3]://Horse
                    //horseMoves(table, row, col)
                    break

                case blackPieces[4]://Queen
                    queenMoves(table, row, col)
                    break

                case blackPieces[5]://King
                    kingMoves(table, row, col)
                    break

                default:
                    break
            }
        }
    }

    // busco cual de los resultados es el que tiene el mayor valor.
    let maxValue = 0

    possibleMovementsBlack.forEach(pm => {
        if (pm.value >= maxValue) {
            maxValue = pm.value
        }
    })

    // guardo el indice de ese maximo
    let index = 0;
    index = possibleMovementsBlack.findIndex(s => s.value == maxValue);

    //console.log(possibleMovementsBlack)
    console.table(table)


    let result;
    result = {
        value: possibleMovementsBlack[index].value,
        from_row: possibleMovementsBlack[index].from_row,
        from_col: possibleMovementsBlack[index].from_col,
        to_row: possibleMovementsBlack[index].to_row,
        to_col: possibleMovementsBlack[index].to_col,
    }


    // devuelvo un json con los datos desde y hacia del movimiento de mayor valor
    console.log(result)
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

function rookMoves(table, row, col) {
    //Row - Moves
    //Eat row
    dance:
    for (let i = (row + 1); i < max; i++) {
        if (blackPieces.includes(table[i][col])) {
            if (table[i - 1][col] == ' ') {
                possibleMovementsBlack.push({
                    value: 8,
                    from_row: row,
                    from_col: col,
                    to_col: col,
                    to_row: i - 1,
                })
            }
            break dance;
        }
        if (whitePieces.includes(table[i][col])) {
            possibleMovementsBlack.push({
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
        if (blackPieces.includes(table[i][col])) {
            if (table[i + 1][col] == ' ') {
                possibleMovementsBlack.push({
                    value: 8,
                    from_row: row,
                    from_col: col,
                    to_col: col,
                    to_row: i + 1,
                })
            }
            break dance;
        }
        if (whitePieces.includes(table[i][col])) {
            possibleMovementsBlack.push({
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

        if (blackPieces.includes(table[row][i])) {
            if (table[row][i - 1] == ' ') {
                possibleMovementsBlack.push({
                    value: 8,
                    from_row: row,
                    from_col: col,
                    to_col: i - 1,
                    to_row: row,
                })
            }
            break dance;
        }
        if (whitePieces.includes(table[row][i])) {
            possibleMovementsBlack.push({
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
        if (blackPieces.includes(table[row][i])) {
            if (table[row][i + 1] == ' ') {
                possibleMovementsBlack.push({
                    value: 8,
                    from_row: row,
                    from_col: col,
                    to_col: i + 1,
                    to_row: row,
                })
            }
            break
        }
        if (whitePieces.includes(table[row][i])) {
            possibleMovementsBlack.push({
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

function bishopMoves(table, row, col) {
    // Eat diagonal derecha arriba
    for (let i = (row + 1), j = (col + 1); i < max && j < max; i++, j++) {

        if (whitePieces.includes(table[i][j])) {
            possibleMovementsBlack.push({
                value: 7,
                from_row: row,
                from_col: col,
                to_col: j,
                to_row: i,
            })
            break
        }
        if (blackPieces.includes(table[i][j])) {
            if (table[i - 1][j - 1] == ' ') {
                possibleMovementsBlack.push({
                    value: 7,
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
        if (whitePieces.includes(table[i][j])) {
            possibleMovementsBlack.push({
                value: 7,
                from_row: row,
                from_col: col,
                to_col: j,
                to_row: i,
            })
            break
        }
        if (blackPieces.includes(table[i][j])) {
            if (table[i - 1][j + 1] == ' ') {
                possibleMovementsBlack.push({
                    value: 7,
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
        if (whitePieces.includes(table[i][j])) {
            possibleMovementsBlack.push({
                value: 7,
                from_row: row,
                from_col: col,
                to_col: j,
                to_row: i,
            })
            break
        }
        if (blackPieces.includes(table[i][col])) {
            if (table[i + 1][j + 1] == ' ') {
                possibleMovementsBlack.push({
                    value: 7,
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
        if (whitePieces.includes(table[i][j])) {

            possibleMovementsBlack.push({
                value: 7,
                from_row: row,
                from_col: col,
                to_col: j,
                to_row: i,
            })
            break
        }
        if (blackPieces.includes(table[i][col])) {
            if (table[i + 1][j - 1] == ' ') {
                possibleMovementsBlack.push({
                    value: 7,
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


    for (let i = 0; i < 8; i++) {
        let move_row = row + X[i]
        let move_col = col + Y[i]

        // Check if each possible move is valid or not 
        if (move_row > max || move_col > max || move_row < min || move_col < min) {
            break
        }

        if ((table[move_row][move_col] == ' ')) {
            possibleMovementsBlack.push({
                value: 1,
                from_row: row,
                from_col: col,
                to_col: move_col,
                to_row: move_row,
            })
        }
        if (whitePieces.includes(table[move_row][move_col])) {
            possibleMovementsBlack.push({
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
    for (let i = (row + 1); i < max; i++) {
        if (blackPieces.includes(table[i][col])) {
            if (table[i - 1][col] == ' ') {
                possibleMovementsBlack.push({
                    value: 9,
                    from_row: row,
                    from_col: col,
                    to_col: col,
                    to_row: i - 1,
                })
            }
            break
        }
        if (whitePieces.includes(table[i][col])) {
            possibleMovementsBlack.push({
                value: 9,
                from_row: row,
                from_col: col,
                to_col: col,
                to_row: i,
            })
            break
        }
    }
    //Eat row behind
    for (let i = (row - 1); i > min; i--) {
        if (blackPieces.includes(table[i][col])) {
            if (table[i + 1][col] == ' ') {
                possibleMovementsBlack.push({
                    value: 9,
                    from_row: row,
                    from_col: col,
                    to_col: col,
                    to_row: i + 1,
                })
            }
            break
        }
        if (whitePieces.includes(table[i][col])) {
            possibleMovementsBlack.push({
                value: 9,
                from_row: row,
                from_col: col,
                to_col: col,
                to_row: i,
            })
            break
        }
    }

    //Col - Moves
    //Eat col right
    for (let i = (col + 1); i < max; i++) {

        if (blackPieces.includes(table[row][i])) {
            if (table[row][i - 1] == ' ') {
                possibleMovementsBlack.push({
                    value: 9,
                    from_row: row,
                    from_col: col,
                    to_col: i - 1,
                    to_row: row,
                })
            }
            break
        }
        if (whitePieces.includes(table[row][i])) {
            possibleMovementsBlack.push({
                value: 9,
                from_row: row,
                from_col: col,
                to_col: i,
                to_row: row,
            })
            break
        }
    }
    //Eat col left

    for (let i = (col - 1); i > min; i--) {
        if (blackPieces.includes(table[row][i])) {
            if (table[row][i + 1] == ' ') {
                possibleMovementsBlack.push({
                    value: 9,
                    from_row: row,
                    from_col: col,
                    to_col: i + 1,
                    to_row: row,
                })
            }
            break
        }
        if (whitePieces.includes(table[row][i])) {
            possibleMovementsBlack.push({
                value: 10,
                from_row: row,
                from_col: col,
                to_col: i,
                to_row: row,
            })
            break
        }
    }
     // Eat diagonal derecha arriba
     for (let i = (row + 1), j = (col + 1); i < max && j < max; i++, j++) {

        if (whitePieces.includes(table[i][j])) {
            possibleMovementsBlack.push({
                value: 10,
                from_row: row,
                from_col: col,
                to_col: j,
                to_row: i,
            })
            break
        }
        if (blackPieces.includes(table[i][j])) {
            if (table[i - 1][j - 1] == ' ') {
                possibleMovementsBlack.push({
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
        if (whitePieces.includes(table[i][j])) {
            possibleMovementsBlack.push({
                value: 10,
                from_row: row,
                from_col: col,
                to_col: j,
                to_row: i,
            })
            break
        }
        if (blackPieces.includes(table[i][j])) {
            if (table[i - 1][j + 1] == ' ') {
                possibleMovementsBlack.push({
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
        if (whitePieces.includes(table[i][j])) {
            possibleMovementsBlack.push({
                value: 10,
                from_row: row,
                from_col: col,
                to_col: j,
                to_row: i,
            })
            break
        }
        if (blackPieces.includes(table[i][col])) {
            if (table[i + 1][j + 1] == ' ') {
                possibleMovementsBlack.push({
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
        if (whitePieces.includes(table[i][j])) {

            possibleMovementsBlack.push({
                value: 10,
                from_row: row,
                from_col: col,
                to_col: j,
                to_row: i,
            })
            break
        }
        if (blackPieces.includes(table[i][col])) {
            if (table[i + 1][j - 1] == ' ') {
                possibleMovementsBlack.push({
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

function kingMoves(table, row, col) {

    // All possible moves of a knight 
    let X = [1, -1, 0, 0]
    let Y = [0, 0, 1, -1]


    for (let i = 0; i < 4; i++) {
        let move_row = row + X[i]
        let move_col = col + Y[i]

        // Check if each possible move is valid or not 
        if (move_row > max || move_col > max || move_row < min || move_col < min) {
            break
        }

        if ((table[move_row][move_col] == ' ')) {
            possibleMovementsBlack.push({
                value: 1,
                from_row: row,
                from_col: col,
                to_col: move_col,
                to_row: move_row,
            })
        }
        if (whitePieces.includes(table[move_row][move_col])) {
            possibleMovementsBlack.push({
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

const _moveBlack = moveBlack;
export { _moveBlack as moveBlack };

