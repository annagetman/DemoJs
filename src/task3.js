//Sorting triangles
//Display triangles in descending order of their area.

//    Inputs: an array of triangle objects
//Output: an ordered array of triangle names

let arrTriangles = [
    { name: 'ABC3', a: 2, b: 2, c: 1 },
    { name: 'ABC1', a: 8, b: 2, c: 4 },
    { name: 'ABC2', a: 2, b: 4, c: 4 }
];

const getSquareTriangle = (a, b, c) => {
    let p = (a + b + c) / 2;
    let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    return s;
}


export const sortTriangles = (arr) => {
    let sortArrayTriangles = [];
    arr.forEach(function (item) {
        let res = getSquareTriangle(item.a, item.b, item.c);
       // res.toFixed(2);
        sortArrayTriangles.push(item.name);
        sortArrayTriangles.sort();      
       
    })
    return sortArrayTriangles;
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