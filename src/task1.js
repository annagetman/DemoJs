//��������� �����
//������� ��������� ����� � ��������� ��������� ������ � ������, �� ��������:
//*  *  *  *  *  *
//  *  *  *  *  *  *  
//*  *  *  *  *  *
//  *  *  *  *  *  *
//������� ���������: �����, ������, ������ ��� �����������.
//    �����: ������ � �������������� ��������� �����

let result = '';
const createChessBoard = (length, width, symb) => {
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < width; j++) {
            result += (i % 2 === 1) ? ' ' + symb : symb + ' ';
        }
        result += '\n'
    }
    return result;
}

createChessBoard(4, 6, '*')
console.log(result);

