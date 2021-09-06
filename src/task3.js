//Sorting triangles
//Display triangles in descending order of their area.

//    Inputs: an array of triangle objects
//Output: an ordered array of triangle names

let arrTriangles = [
    { name: 'ABC', a: 10, b: 10, c: 10 },
    { name: 'YJP', a: 8, b: 8, c: 8 },
    { name: 'DRE', a: 2, b: 4, c: 4 }
];

const getSquareTriangle = (a, b, c) => {
    let p = (a + b + c) / 2;
    let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    return s;
}


export const sortTriangles = (arr) => {
    if (arr == undefined) {
        let invalidData = {
            status: 'fail',
            reason: 'Enter data'
        };
        return invalidData;
    } else if (!Array.isArray(arr)) {
        let invalidData = {
            status: 'fail',
            reason: 'Enter array'
        };
        return invalidData;
    } else {

        let sortArrayTriangles = [];
        arr.forEach(function (item) {
            let square = getSquareTriangle(item.a, item.b, item.c);

            sortArrayTriangles.push({
                name: item.name,
                square: square
            });

        })
        sortArrayTriangles.sort(function (a, b) {
            if (a.square > b.square) {
                return 1;
            }
            if (a.square < b.square) {
                return -1;
            }
            return 0;
        })

        return sortArrayTriangles
    }
}


console.log(sortTriangles(arrTriangles));






























//let recrangls = [
//    { name: 'ABC', a: 3, b: 7, c: 5 },
//    { name: 'MNB', m: 3, n: 2, b: 4 },
//    { name: 'XSF', x: 2, s: 4, f: 4 }
//];

//const getSRegtangle = (a, b, c) => {
//    let p = (a + b + c) / 2;
//    let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
//    return s;
//}

//let sortArrayRegtangls = [];

//const sortRegtangl = (arr) => {
//    arr.forEach(function (item) {
//        let res = getSRegtangle(item[1], item[2], item[3]);
//        console.log(sortArrayRegtangls.push(item.name))
//        sortArrayRegtangls.sort();      
//    })
//}

//sortRegtangl(arrRecrangls);
//console.log(sortArrayRegtangls)