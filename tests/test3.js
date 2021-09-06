import { sortTriangles } from '../src/task3.js';

export const test3 = (assert) => {
    describe('Task 3 - "Sorting triangles"', () => {
        it('function work correctly', function () {
            let arrTriangles = [
                { name: 'ABC', a: 10, b: 10, c: 10 },
                { name: 'YJP', a: 8, b: 8, c: 8 },
                { name: 'DRE', a: 2, b: 4, c: 4 }
            ];
            let result = [ 
                { name: "DRE", square: 3.872983346207417 },
                { name: "YJP", square: 27.712812921102035 },
                { name: "ABC", square: 43.30127018922193 }
            ];

            assert.deepEqual(sortTriangles(arrTriangles), result);
        });
        it('Test to work with no arguments', () => {
            let invalidData = {
                status: 'fail',
                reason: 'Enter data'
            };
            let result = sortTriangles();

            assert.deepEqual(result, invalidData);
        });
        it('Arguments mast be array', () => {
            let invalidData = {
                status: 'fail',
                reason: 'Enter array'
            }
            let result = sortTriangles(1);

            assert.deepEqual(result, invalidData);
        });
        it('Arguments mast be array', () => {
            let invalidData = {
                status: 'fail',
                reason: 'Enter array'
            }
            let result = sortTriangles('kkk');

            assert.deepEqual(result, invalidData);
        });
    })
}