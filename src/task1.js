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
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < width; j++) {
            //result += (i % 2 === 1) ? ' ' + symb : symb + ' ';
            result += (i + j) % 2 ? board += symb : board += ' ';
        }
        board += '\n'
    }
    return board;
}

//createChessBoard(4, 12, '*')
console.log(board);
