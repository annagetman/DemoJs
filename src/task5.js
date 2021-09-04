//Happy ticket
//There are 2 ways to count lucky tickets:
//1. Simple - if a six - digit number is printed on the ticket, and the sum of the first three digits is equal
//to the sum of the last three, then this ticket is considered lucky.
//2. Hard - if the sum of the even digits of the ticket is equal to the sum of the odd digits of the ticket,
//    then the ticket is considered lucky.
//Determine programmatically which variant of counting lucky tickets will give them a greater number at a given interval.

//Input parameters: context object with min and max fields
//Output: an object with information about the winning method and the number of lucky tickets for each counting method.


console.log('******************');

let context = {
    min: 121212,
    max: 212121
};

export const getGreaterMethodHappyTicket = (obj) => {
    if (obj == undefined) {
        let invalidData = {
            status: 'fail',
            reason: 'enter arguments'
        };
        return invalidData;
    }
    else if (typeof (obj) != 'object') {
        let invalidData = {
            status: 'fail',
            reason: 'data is not object'
        };
        return invalidData;
    }
    else if (obj.min < obj.max) {
        let result = {
            method: 0,
            simpleHappyTicket: 0,
            hardHappyTicket: 0
        };
        let simpleHappy = 0;
        let hardHappy = 0;

        let min = obj.min;
        let max = obj.max;

        while (min < max) {
            let x = min.toString().split('');

            let sumFirst = +x[0] + +x[1] + +x[2];
            let sumLast = +x[3] + +x[4] + +x[5];
            if (sumFirst == sumLast) { result.simpleHappyTicket += 1; }

            let sumOdd = 0;
            let sumEven = 0;
            for (let i = 0; i < x.length; i += 1) {
                x[i] % 2 ? sumEven += +x[i] : sumOdd += +x[i];
            }
            if (sumOdd == sumEven) { result.hardHappyTicket += 1; }

            min += 1;
        }
        result.method = simpleHappy >= hardHappy ? 1 : 2;
        return result;
    }
    return false;

}




console.log(getGreaterMethodHappyTicket(context))