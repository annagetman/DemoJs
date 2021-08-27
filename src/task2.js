//Анализ конвертов
//Есть два конверта со сторонами(a, b) и(c, d).Требуется определить, можно ли один конверт вложить в другой.
//Программа должна обрабатывать ввод чисел с плавающей точкой.


//Входные параметры: объекты конверт1 и конверт2
//Выход: номер конверта, если вложение возможно, 0 – если вложение невозможно.

const envelopes1 = { a: 6, b: 8 };
const envelopes2 = { c: 5, d: 7 };
let res= 0;

export const getAnalysisofEnvelopes = (obj1, obj2) => {
    if (obj1.a < obj2.c && obj1.b < obj2.d) {
        res = 2;
    }
   else if (obj1.a > obj2.c && obj1.b > obj2.d) {
        res = 1;
    }
    else {
        res = 0;
    }

}

//getAnalysisofEnvelopes(envelopes1, envelopes2);
console.log(res)
