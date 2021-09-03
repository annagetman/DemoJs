//Ряд Фибоначчи для диапазона
//Вывести все числа Фибоначчи, которые удовлетворяют переданному в функцию ограничению: находятся в указанном диапазоне, либо имеют указанную длину.

//Входные параметры: объект context с полями min и max, либо с полем length
//Выход: массив чисел


const context = { length: 7 };

export const getNumbersFibonacci = (obj) => {
    const resultFibonacci = [0, 1];

    let numFibonacci = obj.length;
    if (obj.length > 47 || obj.length <= 0) {
        let invalidData = {
            status: 'fail',
            reason: 'the number must be no less than 0 or no more than 47'
        };

        return invalidData;

    } else if (obj.length == undefined) {
        let invalidData = {
            status: 'fail',
            reason: 'enter data'
        }

        return invalidData;
    } else if (typeof (context) != 'object' || Array.isArray(context)) {

        let invalidData = {
            status: 'fail',
            reason: 'data must be a object'
        }
        return invalidData;
    } else {
        for (let i = 2; i < numFibonacci; i++) {
            resultFibonacci.push(resultFibonacci[i - 2] + resultFibonacci[i - 1]);
        }
        return resultFibonacci;
    }
}

console.log(getNumbersFibonacci(context));


