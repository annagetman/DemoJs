//Palindrome
//Check if a number or part of it is a palindrome.For example, the number 1234437 is not a palindrome, but its part is 3443.
//Numbers less than 10 are not considered palindrome.

//Input parameters: number
//Output: the palindrome extracted from the number, or 0 if the extraction failed.

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

