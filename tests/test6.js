import { getNums } from '../src/task6.js';

export const test6 = (assert) => {
    describe('Task 6', function () {
        it('function work correctly', function () {
            const rowNums = '9,10,11';
            assert.deepEqual(getNums(3, 81), rowNums);
        });

    });
}