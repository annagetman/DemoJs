
//ѕалиндром
//ѕроверить €вл€етс€ ли число или его часть палиндромом.Ќапример, число 1234437 не €вл€етс€ палиндромом, но €вл€етс€ палиндромом
//его часть 3443. „исла меньшие, чем 10 палиндромом не считать.

//¬ходные параметры: число
//¬ыход: извлеченный из числа палиндром либо 0, если извлечение не удалось.

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
