
const { maketable } = require("../src/util/makeTable");
const { tableInit } = require("./mockTables/mockTables");
const boardInit = 'rrhhbbqqkkbbhhrrrrhhbbqqkkbbhhrrpppppppppppppppppppppppppppppppp                                                                                                                                PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPRRHHBBQQKKBBHHRRRRHHBBQQKKBBHHRR' 

describe('make table test', () => {

    test('maketable test', () => {
        expect(maketable(boardInit)).toStrictEqual(tableInit)
    })
})
