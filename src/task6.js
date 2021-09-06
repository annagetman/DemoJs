//Number sequence
//Print a comma - separated series of length n, consisting of natural numbers whose square is at least a given m.

//Input parameters: length and minimum square value(ZMK)
//Output: string with row of numbers
//Example:
//in: 81, 3
//out: 9, 10 11

let res = '';
let numRowArr = [];

export const getNums = (m, lengthNum) => {
    if (lengthNum == undefined || m == undefined) {
        return false;

    } if (typeof (lengthNum) != 'number' || typeof (m) != 'number') {
        return false;

    } else {
        let squareRootOfNum = Math.sqrt(m);
        for (let i = 0; i < lengthNum; i++) {
            numRowArr.push(squareRootOfNum + i);
        }
        res = numRowArr.join(',');
        return res;
    }
}
