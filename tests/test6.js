import { getNums } from '../src/task6.js';

export const test6 = (assert) => {
    describe('Task 6 - "Number sequence"', () => {
        it('Function works correctly', () =>{
            const rowNums = '9,10,11';
            assert.deepEqual(getNums(81, 3), rowNums);
        });
        it('Function return string', () => {
            const rowNums = 77;
            const minPow = 25;
            const result = getNums(rowNums, minPow);
            assert.isString(result);
        });
        it('Function must have number argument', () => {
            const rowNums = [7];
            const minPow = '25';
            const result = getNums(rowNums, minPow);
            assert.isFalse(result);
        });
        it('Test to work with no arguments', () => {
            const result = getNums();
            assert.isFalse(result);
        });

    });
}