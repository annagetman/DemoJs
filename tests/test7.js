import { getNumbersFibonacci } from '../src/task7.js';

export const test7 = (assert) => {
    describe('Task 7 - "Fibonacci range"', () => {
        it('Function works correctly', function () {
            const str = [0, 1, 1, 2, 3, 5, 8];
            const num = { length: 7 }
            assert.deepEqual(getNumbersFibonacci(num), str);
        });
        it('The number must be greater than zero', () => {
            let invalidData = {
                status: 'fail',
                reason: 'The number must be greater than zero and no more than 47'
            };
            const num = { length: -1 }
            assert.deepEqual(getNumbersFibonacci(num), invalidData);
        });
        it('The number must be no more than 47', () => {
            let invalidData = {
                status: 'fail',
                reason: 'The number must be greater than zero and no more than 47'
            };
            const num = { length: 50 }
            assert.deepEqual(getNumbersFibonacci(num), invalidData);
        });
        it('Test to work with no arguments', () => {
            let invalidData = {
                status: 'fail',
                reason: 'Enter data'
            }
            assert.deepEqual(getNumbersFibonacci(1), invalidData);
        });
    });
}