const { moveBlack } = require("./strategiesColours/Black");
const { moveWhite } = require("./strategiesColours/White");
const { maketable } = require("./util/makeTable");
const { moveTable } = require("./util/moveTable");

function moveColor(board, colour, profundidad, table) {

    //vacio el arreglo porque tiene movimientos de la jugada anterior
    
    let possibleMovements = []
    let result;
    let possibleTable = []
    let possibleMovements = []
    let bestMoveAfter = null
    let bestMoveCounter = null



    //genero una matriz 
    if (board != null) {
        table = maketable(board)
    }

    if (colour == 'white') {
        possibleMovements = moveWhite(table)
        if (profundidad == 0) {
            bestMoveCounter = 0

            possibleMovements.forEach(pm => {
            
                possibleTable = []
                possibleTableCounter = []
            
                possibleTable = moveTable(table2, pm)
                bestMoveCounter = moveColor(null, 'black', 1, possibleTable)

                possibleTableCounter = moveTable(possibleTable, bestMoveCounter)
                bestMoveAfter = moveColor(null, 'white', 1, possibleTableCounter)

                pm.value = pm.value * 2 - bestMoveCounter.value + bestMoveAfter.value
            });
        }
    } else {
        possibleMovements = moveBlack(table)
        if (profundidad == 0) {
            bestMoveCounter = 0

            possibleMovements.forEach(pm => {

                possibleTable = moveTable(table2, pm)
                bestMoveCounter = moveColor(null, 'white', 1, possibleTable)

                possibleTableCounter = moveTable(possibleTable, bestMoveCounter)
                bestMoveAfter = moveColor(null, 'black', 1, possibleTableCounter)

                pm.value = pm.value * 2 - bestMoveCounter.value + bestMoveAfter.value
            });
        }

    }



    // busco cual de los resultados es el que tiene el mayor valor.
    let maxValue = -999999999999;

    possibleMovements.forEach(pm => {
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
    //console.log("result: ", result)
    return result;
}

module.exports.moveColor = moveColor;