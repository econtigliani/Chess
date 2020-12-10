const { moveBlack } = require("./strategiesColours/Black");
const { moveWhite } = require("./strategiesColours/White");
const { maketable } = require("./util/makeTable");
const { moveTable } = require("./util/moveTable");
const MAXDEPTH = 3

function moveColor(board, colour, profundidad = MAXDEPTH) {

    if (profundidad == 0){
        return {value : 0}
    }
    //vacio el arreglo porque tiene movimientos de la jugada anterior

    let possibleMovements = []
    let result;


    //genero una matriz 
    if (profundidad == MAXDEPTH) {
        board = maketable(board)
    }

    if (colour == 'white') {
        possibleMovements = moveWhite(board)
        if (profundidad > 0 ) {
            bestMoveCounter = 0

            possibleMovements.forEach(pm => {
                
                possibleTable = []
                possibleTableCounter = []
                bestMoveCounter = 0
    
                possibleTable = moveTable(board, pm)
                bestMoveCounter = 0
                bestMoveCounter = moveColor(possibleTable, 'black', profundidad - 1).value
                    
                pm.value = profundidad * pm.value - bestMoveCounter

               
            });
        }
    } else 
    possibleMovements = moveBlack(board)
    if (profundidad > 0) {
        bestMoveCounter = 0

        possibleMovements.forEach(pm => {

            possibleTable = []
            possibleTableCounter = []
            bestMoveCounter = 0
            possibleTable = moveTable(board, pm)
            bestMoveCounter =moveColor(possibleTable, 'white', profundidad - 1).value

            pm.value = profundidad * pm.value - bestMoveCounter
        });
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