//���������� �������������
//������� ������������ � ������� �������� �� �������.

//������� ���������: ������ �������� �����������
//�����: ������������� ������ ��� �������������

//����������:
//�	������ ������� ������������ ������ ������������ �� ������� ������.
//�	������ ����������� ������������ ������� ������ � ������� ��� ������.
//�	���������� ������ ������������ ���� ����� � ��������� ������:
//{
//    vertices: �ABC�,
//    a: 10,
//        b: 20,
//            c: 22.36
//}

let arrRecrangls = [
    { name: 'reg1', a: 3, b: 2, c:4},
    { name: 'reg2', a: 3, b: 7, c:5},
    { name: 'reg3', a: 6, b: 2, c:2}
];
//const sortRegtangls = (arr) => {
  
//}
//sortRegtangls(arrRecrangls)
console.log(arrRecrangls.name)
const getSRegtangle = (a, b, c) => {
    let s = 0;
    let p = (a + b + c) / 2;
    console.log(p)
    s = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    console.log(s.toFixed(2));
}

getSRegtangle(3, 3, 3);
