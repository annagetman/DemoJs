//Шахматная доска
//Вывести шахматную доску с заданными размерами высоты и ширины, по принципу:
//*  *  *  *  *  *
//  *  *  *  *  *  *  
//*  *  *  *  *  *
//  *  *  *  *  *  *
//Входные параметры: длина, ширина, символ для отображения.
//    Выход: строка с представлением шахматной доски


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


