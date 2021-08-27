
//���������
//��������� �������� �� ����� ��� ��� ����� �����������.��������, ����� 1234437 �� �������� �����������, �� �������� �����������
//��� ����� 3443. ����� �������, ��� 10 ����������� �� �������.

//������� ���������: �����
//�����: ����������� �� ����� ��������� ���� 0, ���� ���������� �� �������.

//function IsPalindrome(n) {
//    return n + (((n += "").split("").reverse().join("") == n) ? " is a palindrome" : " is not a palindrome");
//}

//console.log(IsPalindrome(1234437));


const getPalindromNamber = function (num) {
    if (num < 0) return false;
    if (num % 10 === 0) return false;
    if (num < 10) return true;

    let rev = 0;

    while (num > rev) {
        rev *= 10;
        rev += num % 10;
        num = Math.trunc(num/10)
    }
    return num === rev || Math.trunc(rev/10)
}

console.log(getPalindromNamber(2552))
