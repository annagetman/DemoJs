//Шахматная доска
//Вывести шахматную доску с заданными размерами высоты и ширины, по принципу:
//*  *  *  *  *  *
//  *  *  *  *  *  *  
//*  *  *  *  *  *
//  *  *  *  *  *  *
//Входные параметры: длина, ширина, символ для отображения.
//    Выход: строка с представлением шахматной доски
let board = ''
let result = '';
export const createChessBoard = (length, width, symb) => {
    if (width || length != 0) {
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < width; j++) {
                //result += (i % 2 === 1) ? ' ' + symb : symb + ' ';
                result += (i + j) % 2 ? board += symb : board += ' ';
            }
            board += '\n'
        }
        return board;
    }
    else {
        console.log('enter data')
    }
}

//createChessBoard(6, 12, '*')
console.log(board);
