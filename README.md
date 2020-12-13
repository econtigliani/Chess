[![Coverage Status](https://coveralls.io/repos/github/econtigliani/Chess/badge.svg?branch=master)](https://coveralls.io/github/econtigliani/Chess?branch=master)
[![Build Status](https://travis-ci.org/econtigliani/Chess.svg?branch=master)](https://travis-ci.org/econtigliani/Chess)

## Megachess
This is a challenge for EDA Talent Show, EventBrite. The task is to build an client AI which can play megachess
similar to chess but with a 16x16 board and promote in the middle of the maps and others interesting thinks.

## Requires
The challenge requires websockets to communicate with the server.

## Lenguajes and tools
Use node.js and jest for testing.

## How to run
Two steps:
* First create a authtoken.txt with your authtoken.
* Second run with:
    ```
    npm start.
    ```
## Strategy
My bot plays with a recursive algorithm similar to minimax where it calculates the possible movements of the turn, the best possible movements of the opponent in response and my best next move.

### Thanks for read me :D
Any questions? Ask me:
* emacontigliani@gmail.com
