//Сортировка треугольников
//Вывести треугольники в порядке убывания их площади.

//Входные параметры: массив объектов треугольник
//Выход: упорядоченный массив имён треугольников

//Примечание:
//•	Расчёт площади треугольника должен производится по формуле Герона.
//•	Каждый треугольник определяется именами вершин и длинами его сторон.
//•	Приложение должно обрабатывать ввод чисел с плавающей точкой:
//{
//    vertices: ‘ABC’,
//    a: 10,
//        b: 20,
//            c: 22.36
//}

let arrRecrangls = [
    { name: 'ABC3', a: 3, b: 7, c: 5 },
    { name: 'ABC1', a: 3, b: 2, c: 4 },
    { name: 'ABC2', a: 2, b: 4, c: 4 }
];
//const sortRegtangls = (arr) => {

//}
//sortRegtangls(arrRecrangls)

//console.log(arrRecrangls.name)
const getSRegtangle = (a, b, c) => {
    let p = (a + b + c) / 2;
    // console.log(p)
    let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    return s;
    //console.log(s.toFixed(2));
}

console.log('--------')

let sortArrayRegtangls = [];

const sortRegtangl = (arr) => {
    arr.forEach(function (item) {
        let res = getSRegtangle(item.a, item.b, item.c);
        //console.log(res.toFixed(2));

        console.log(sortArrayRegtangls.push(item.name))
        //console.log(typeof (sortArrayRegtangls))
        //console.log(sortArrayRegtangls)
        sortArrayRegtangls.sort();
       
    })
}

sortRegtangl(arrRecrangls);
console.log(sortArrayRegtangls)