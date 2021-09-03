//Chess board----
//Display a chessboard with the specified dimensions of height and width, according to the * space principle.
//*  *  *  *  *  *
//  *  *  *  *  *  *  
//*  *  *  *  *  *
//  *  *  *  *  *  *
//Input parameters: length, width, symbol to display.
//Output: string with chessboard representation
//length, width - natural number(integer, positive, not equal to 0), [1, 64]
//character is a string of length 1, not a space

export const createChessBoard = (length, width, symb) => {
    let board = '';
    let result = '';

    if (width <= 0 || length <= 0) {
        let invalidData = {
            status: 'fail',
            reason: 'width and length must be bigger 0'
        };
        return invalidData;
    } else if (width == undefined || length == undefined || symb == undefined) {
        let invalidData = {
            status: 'fail',
            reason: 'enter width, length and symbol'
        };
        return invalidData;
    } else if (typeof (symb) != 'string') {
        let invalidData = {
            status: 'fail',
            reason: 'symbol must be a string'
        }
        return invalidData;
    } else {
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < width; j++) {
                //result += (i % 2 === 1) ? ' ' + symb : symb + ' ';
                result += (i + j) % 2 ? board += symb : board += ' ';
            }
            board += '\n'
        }
        return board;
    }
}

//createChessBoard(6, 12, '*')
//console.log(board);


