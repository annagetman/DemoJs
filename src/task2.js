//������ ���������
//���� ��� �������� �� ���������(a, b) �(c, d).��������� ����������, ����� �� ���� ������� ������� � ������.
//��������� ������ ������������ ���� ����� � ��������� ������.


//������� ���������: ������� �������1 � �������2
//�����: ����� ��������, ���� �������� ��������, 0 � ���� �������� ����������.

const envelopes1 = { a: 4, b: 6 };
const envelopes2 = { c: 5, d: 7 };
let res = '';

const getAnalysisofEnvelopes = (obj1, obj2) => {
    if (obj1.a < obj2.c && obj1.b < obj2.d) {
        res = 'Envelopes 2';
    }
   else if (obj1.a > obj2.c && obj1.b > obj2.d) {
        res = 'Envelopes 1';
    }
    else {
        res = '0';
    }

}

getAnalysisofEnvelopes(envelopes1, envelopes2);
console.log(res)

//if (aWidth < bWidth && aHeight < bHeight || aWidth < bHeight && aHeight < bWidth) {
//    return 1;
//} else if (aWidth > bWidth && aHeight > bHeight || aWidth > bHeight && aHeight > bWidth) {

