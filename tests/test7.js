import { getNumbersFibonacci } from '../src/task7.js';

export const test7 = (assert) => {
    describe('Task 7 - "Fibonacci range"', function () {
        it('function work', function () {
            const str = [0, 1, 1, 2, 3, 5, 8];
            const num = { length: 7 }
            assert.deepEqual(getNumbersFibonacci(num), str);
        });
        it('the number must be no less than 0', function () {
            let invalidData = {
                status: 'fail',
                reason: 'the number must be no less than 0 or no more than 47'
            };
            const num = { length: -1 }
            assert.deepEqual(getNumbersFibonacci(num), invalidData);
        });
        it('the number must be no more than 47', function () {
            let invalidData = {
                status: 'fail',
                reason: 'the number must be no less than 0 or no more than 47'
            };
            const num = { length: 50 }
            assert.deepEqual(getNumbersFibonacci(num), invalidData);
        });
        it('enter data', function () {
            let invalidData = {
                status: 'fail',
                reason: 'enter data'
            }
            assert.deepEqual(getNumbersFibonacci(1), invalidData);
        });
        //it('data is a object', function () {
        //    let invalidData = {
        //        status: 'fail',
        //        reason: 'data must be a object'
        //    }
        //    assert.deepEqual(getNumbersFibonacci(1), invalidData);
        //});

    });
}