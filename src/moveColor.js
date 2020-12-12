const { colours } = require("./enums/colours");
const { black, white } = require("./enums/colours");
const { moveBlack } = require("./strategiesColours/Black");
const { moveWhite } = require("./strategiesColours/White");
const { maketable } = require("./util/makeTable");
const { moveTable } = require("./util/moveTable");
const { placeWeight } = require("./util/weightPlaces");


const MAXDEPTH = 3

function moveColor(board, colour, profundidad = MAXDEPTH) {

    //vacio el arreglo porque tiene movimientos de la jugada anterior

    let possibleMovements = []
    let result;
    let bestMoveCounter
    let possibleTable
    let possibleTableCounter

    //genero una matriz 
    if (profundidad == MAXDEPTH) {
        board = maketable(board)
    }

    if (colour == colours.white) {
        possibleMovements = moveWhite(board)

            possibleMovements.forEach(pm => {

                possibleTable = []
                possibleTableCounter = []
                bestMoveCounter = 0

                possibleTable = moveTable(board, pm)
                bestMoveCounter = (profundidad == 1) ? 0 : moveColor(possibleTable, colours.black, profundidad - 1).value
                if (profundidad == 3) {
                    pm.value = pm.value * 2 - bestMoveCounter
                } else {
                    pm.value = pm.value - bestMoveCounter
                }



            });
        
    } else {
        possibleMovements = moveBlack(board)

            possibleMovements.forEach(pm => {

                possibleTable = []
                possibleTableCounter = []
                bestMoveCounter = 0
                possibleTable = moveTable(board, pm)
                bestMoveCounter = (profundidad == 1) ? 0 : moveColor(possibleTable, colours.white, profundidad - 1).value

                if (profundidad == 3) {
                    pm.value = pm.value * 2 - bestMoveCounter
                } else {
                    pm.value = pm.value - bestMoveCounter
                }

            });
    }

    // busco cual de los resultados es el que tiene el mayor valor.
    let maxValue = -999999999999;

    possibleMovements.forEach(pm => {
        pm.value = pm.value + placeWeight(pm.from_col)
        if (pm.value >= maxValue) {
            maxValue = pm.value
        }
    })

    // guardo el indice de ese maximo
    let index = 0;
    index = possibleMovements.findIndex(s => s.value == maxValue);

    //console.table(table)

    result = {
        //num: possibleMovements[index].num,
        value: possibleMovements[index].value,
        from_row: possibleMovements[index].from_row,
        from_col: possibleMovements[index].from_col,
        to_row: possibleMovements[index].to_row,
        to_col: possibleMovements[index].to_col,
    }

    // devuelvo un json con los datos desde y hacia del movimiento de mayor valor

    return result;
}

module.exports.moveColor = moveColor;