const pawnMoves = require("../src/piecesMoves/pawnMoves");
const { blackPieces, whitePieces } = require("../enums/pieces")
const { letterToName } = require('../enums/letterToName')
const { valuePieces } = require("../enums/valuePieces")
const weightPieces = require("../enums/weightPieces").weightPieces
const { max, min } = require("../enums/limitsBoard")

jest.mock("../enums/pieces")
jest.mock("../enums/limitsBoard")
jest.mock("../enums/valuePieces")
jest.mock("../enums/letterToName")
jest.mock("../enums/weightPieces")

describe('test pawn moves')