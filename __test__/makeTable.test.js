const { maketable } = require("../src/util/makeTable")
const { tableInit } = require("./mockTables")
const boardInit = 'rrhhbbqqkkbbhhrrrrhhbbqqkkbbhhrrpppppppppppppppppppppppppppppppp                                                                                                                                PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPRRHHBBQQKKBBHHRRRRHHBBQQKKBBHHRR'

describe('Make table test', () => {

    test('Make table test', () => {
        expect(maketable( boardInit)).toStrictEqual( tableInit)
        })
    })
