const { challenged } = require("../responses/challenged")
const { move } = require("../responses/my_turn")


describe('challenged test', () => {

    test('accept challenge', () => {
        expect(challenged('12345678910pruebas')).toStrictEqual(
            JSON.stringify({
            action: 'accept_challenge',
            data: {
                board_id : '12345678910pruebas'
            }
        })
        )
    })
})

/* describe('My turn test', () => {

    test('test answers', () => {
        expect(move('12345678910pruebas')).toStrictEqual(
            JSON.stringify({
            action: 'accept_challenge',
            data: {
                board_id : '12345678910pruebas'
            }
        })
        )
    })
}) */



