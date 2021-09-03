//Analysis of envelopes
//There are two envelopes with sides(a, b) and(c, d).It is required to determine whether one envelope can be nested in another.
//The program must handle floating point input.

//Input parameters: envelope1 and envelope2 objects
//Output: envelope number, if attachment is possible, 0 - if attachment is impossible.


const envelopes1 = { a: 6, b: 8 };
const envelopes2 = { c: 5, d: 7 };

export const getAnalysisofEnvelopes = (obj1, obj2) => {
    let result = 0;

    if (obj1 == undefined || obj2 == undefined) {
        return result = {
            status: 'fail',
            reason: 'enter 2 arguments'
        };
    } if (typeof (obj1) != 'object' || typeof (obj2) != 'object')
        return result = {
            status: 'fail',
            reason: 'arguments must be an objects'
        };
    if (obj1.a < obj2.c && obj1.b < obj2.d) {
        result = 2;
    }
    else if (obj1.a > obj2.c && obj1.b > obj2.d) {
        result = 1;
    }
    else {
        result = 0;
    }
    return result;
}


//getAnalysisofEnvelopes(envelopes1, envelopes2);
//console.log(res);