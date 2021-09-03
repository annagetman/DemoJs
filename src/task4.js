
//ѕалиндром
//ѕроверить €вл€етс€ ли число или его часть палиндромом.Ќапример, число 1234437 не €вл€етс€ палиндромом, но €вл€етс€ палиндромом
//его часть 3443. „исла меньшие, чем 10 палиндромом не считать.

//¬ходные параметры: число
//¬ыход: извлеченный из числа палиндром либо 0, если извлечение не удалось.

export function longestPalindrome(str) {
    let max = '';
    if (str == undefined) {
        return false;
    } else if (str.length >= 4) {
        for (let i = 0; i < str.length; i++) {
            for (let j = 0; j < 2; j++) {
                let left = i;
                let right = i + j;
                while (str[left] && str[left] === str[right]) {
                    left--;
                    right++;
                }
                if ((right - left - 1) > max.length) {
                    max = str.substring(left + 1, right);
                }
            }
        }
        return max;
    }
    else {
        return 0;
    }
}
console.log(longestPalindrome('2332'));
