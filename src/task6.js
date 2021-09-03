
//Числовая последовательность
//Вывести через запятую ряд длиной n, состоящий из натуральных чисел, квадрат которых не меньше заданного m.

//Входные параметры: длина и значение минимального квадрата(ЗМК)
//Выход: строка с рядом чисел
//Example:
//in: 81, 3
//out: 9, 10 11

let res = '';
let nRow = [];
let num = 1;

export const getNums = (lengthNum, m) => {
    if (lengthNum == undefined || m == undefined) {
        return false;
    } if (typeof (lengthNum) != 'number' || typeof (m) != 'number') {
        return false;
    } else {
        //for (let i = 0; i < lengthNum; i++) {
        //    let squareNum = num * num;
        //    if (squareNum >= m) {
        //        nRow.push(num);
        //    }
        //    return nRow
        //}
//        nRow.forEach(() => {

//)}
        while (nRow.length < lengthNum) {
            let squareNum = num * num;
            if (squareNum >= m) {
                nRow.push(num);
            }
            num += 1;
        }
        res = nRow.join(',');

        return res;
    }
}

    //console.log(getNums(3, 81));
    //console.log('kkkkkkkkkkkkk');


