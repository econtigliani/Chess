const { moveColor } = require("../src/moveColor");

function move(data) {

    let result = moveColor(data.board, data.actual_turn)

    return (JSON.stringify({
        action: 'move',
        data: {
            board_id: data.board_id,
            turn_token: data.turn_token,
            from_row: result.from_row,
            from_col: result.from_col,
            to_row: result.to_row,
            to_col: result.to_col,
        }
    }))

}


module.exports.move = move;