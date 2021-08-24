//��������� �����
//������� ��������� ����� � ��������� ��������� ������ � ������, �� ��������:
//*  *  *  *  *  *
//  *  *  *  *  *  *  
//*  *  *  *  *  *
//  *  *  *  *  *  *
//������� ���������: �����, ������, ������ ��� �����������.
//    �����: ������ � �������������� ��������� �����

let board = ''
const createChessBoard = (length, width, symb) => {
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < width; j++) {
            (i + j) % 2 ? board += symb : board += ' '
        }
        board += '\n'
    }
}

createChessBoard(3, 12, '*')
console.log(board);
