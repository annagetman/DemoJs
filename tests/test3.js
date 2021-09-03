import { sortTriangles } from '../src/task3.js';

export const test3 = (assert) => {
    describe('Task 3 - "Sorting triangles"', function () {
        it('function work correctly', function () {
            let arrTriangles = [
                { name: 'ABC3', a: 3, b: 7, c: 5 },
                { name: 'ABC1', a: 3, b: 2, c: 4 },
                { name: 'ABC2', a: 2, b: 4, c: 4 }
            ];
            let result = ['ABC1', 'ABC2', 'ABC3'];
            assert.deepEqual(sortTriangles(arrTriangles), result);
        });
      
    })
}