const { challenged } = require("../responses/challenged")
const { move } = require("../responses/my_turn")



describe('challenged test', () => {

    test('accept challenge', () => {
        expect(challenged('12345678910pruebas')).toStrictEqual(
            JSON.stringify({
                action: 'accept_challenge',
                data: {
                    board_id: '12345678910pruebas'
                }
            })
        )
    })
})

describe('My turn test', () => {
    let dataWhite = {
            "board_id":"2d348323-2e79-4961-ac36-1b000e8c42a5",
            "turn_token":"e40573bb-138f-4171-a200-66258f546755",
            "username":"gabriel",
            "actual_turn": "white",
            "board":"rrhhbbqqkkbbhhrrrrhhbbqqkkbbhhrrpppppppppppppppppppppppppppppppp                                                                                                                        P       PPPPPPPP PPPPPPPPPPPPPPPPPPPPPPPRRHHBBQQKKBBHHRRRRHHBBQQKKBBHHRR",
            "move_left":19, 
            "opponent_username": "maria"
            }
            
    test('test answers', () => {
        expect(move(dataWhite)).toStrictEqual(
            JSON.stringify({
                action: 'move',
                data: {
                    board_id: "2d348323-2e79-4961-ac36-1b000e8c42a5",
                    turn_token: "e40573bb-138f-4171-a200-66258f546755",
                    from_row: 11,
                    from_col: 8,
                    to_row: 10,
                    to_col: 8,
                }
            })
        )
    })

    let dataBlack = {
        "board_id":"2d348323-2e79-4961-ac36-1b000e8c42a5",
        "turn_token":"e40573bb-138f-4171-a200-66258f546755",
        "username":"gabriel",
        "actual_turn":"black",
        "board":"rrhhbbqqkkbbhhrrrrhhbbqqkkbbhhrrpppppppppppppppppppppppppppppppp                                                                                                                        P       PPPPPPPP PPPPPPPPPPPPPPPPPPPPPPPRRHHBBQQKKBBHHRRRRHHBBQQKKBBHHRR",
        "move_left":18, 
        "opponent_username": "maria"
        }
        test('test answers', () => {
            expect(move(dataBlack)).toStrictEqual(
                JSON.stringify({
                    action: 'move',
                    data: {
                        board_id: "2d348323-2e79-4961-ac36-1b000e8c42a5",
                        turn_token: "e40573bb-138f-4171-a200-66258f546755",
                        from_row: 3,
                        from_col: 7,
                        to_row: 5,
                        to_col: 7,
                    }
                })
            )
        })
})
