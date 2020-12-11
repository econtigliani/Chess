//importaciones
var Challenged = require('./responses/challenged');
var My_Turn = require('./responses/my_turn');
var fs = require('fs');
const { client } = require('websocket');

//lee mi authtoken de un archivo
var authtoken = fs.readFileSync('authtoken.txt').toString();

//generar cliente websocket.
let ws = new client()

//genera el websocket
function connect() {
    ws.connect(`ws://megachess.herokuapp.com/service?authtoken=${authtoken}`)
}

connect();

ws.on('connect', function (connection) {

    connection.on('close', () => {
        connect();
    })

    connection.on('message', (message) => {
        let data = JSON.parse(message.utf8Data)

        switch (data.event) {

            case 'update_user_list':
                console.log(data.data.users_list);
                break;

            case 'ask_challenge':

                //muestro quien me desafio
                console.log("challenged by ", data.data.username)

                //manda la respuesta al desafio
                connection.sendUTF(Challenged.challenged(data.data.board_id));
                break;

            case 'your_turn':

                //envio el movimiento que realizo
                console.log(data.data);
                //console.table(data.table)
                connection.sendUTF(My_Turn.move(data.data));
                break;

            case 'gameover':
                console.log(data.data);
                break;

            default:
                console.log('caso no agarrado')
                console.log(data);
                break;
        }
    })
})
