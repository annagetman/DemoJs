import { getNums } from '../src/task6.js';

export const test6 = (assert) => {
    describe('Task 6 - "Number sequence"', () => {
        it('function work correctly', () =>{
            const rowNums = '9,10,11';
            assert.deepEqual(getNums(3, 81), rowNums);
        });
        it('function return String', () => {
            let rowNums = 77;
            let minPow = 25;
            let result = getNums(rowNums, minPow);
            assert.isString(result);
        });
        it('function must have number argument', () => {
            let rowNums = [7];
            let minPow = '25';
            let result = getNums(rowNums, minPow);
            assert.isFalse(result);
        });
        it('function have not arguments', () => {
            let result = getNums();
            assert.isFalse(result);
        });

    });
}