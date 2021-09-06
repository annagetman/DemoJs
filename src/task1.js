//Chess board----
//Display a chessboard with the specified dimensions of height and width, according to the * space principle.
//*  *  *  *  *  *
//  *  *  *  *  *  *  
//*  *  *  *  *  *
//  *  *  *  *  *  *
//Input parameters: length, width, symbol to display.
//Output: string with chessboard representation

export const createChessBoard = (length, width, symb) => {
    let board = '';
    let result = '';

    if (width <= 0 || length <= 0) {
        let invalidData = {
            status: 'fail',
            reason: 'Width and length must be bigger 0'
        };
        return invalidData;
    } else if (width == undefined || length == undefined || symb == undefined) {
        let invalidData = {
            status: 'fail',
            reason: 'Enter width, length and symbol'
        };
        return invalidData;
    } else if (typeof (symb) != 'string') {
        let invalidData = {
            status: 'fail',
            reason: 'Symbol must be a string'
        }
        return invalidData;
    } else {
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < width; j++) {
                result += (i + j) % 2 ? board += symb : board += ' ';
            }
            board += '\n'
        }
        return board;
    }
}


