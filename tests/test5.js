import { getGreaterMethodHappyTicket } from '../src/task5.js';

export const test5 = (assert) => {
    describe('Task 5 - "Happy tickets"', function () {
        it('Function works correctly', () => {
            const context = {
                min: 121212,
                max: 212121
            };
            let result = {
                method: 1,
                simpleHappyTicket: 5010,
                hardHappyTicket: 2335
            }
            assert.deepEqual(getGreaterMethodHappyTicket(context), result);
        });
        it('Test to work with no arguments', () => {
            let invalidData = {
                status: 'fail',
                reason: 'Enter arguments'
            };
            let result = getGreaterMethodHappyTicket();
            assert.deepEqual(result, invalidData);
        });
        it('Data is not object', () => {
            let invalidData = {
                status: 'fail',
                reason: 'Data is not object'
            };
            let result = getGreaterMethodHappyTicket(4);
            assert.deepEqual(result, invalidData);
        });
        it('Data is not object', () => {
            let invalidData = {
                status: 'fail',
                reason: 'Data is not object'
            };
            let result = getGreaterMethodHappyTicket('fff');
            assert.deepEqual(result, invalidData);
        });
        it('Not complete object', () => {
            const context = {
                min: 121212
            };
            let invalidData = {
                status: 'fail',
                reason: 'Enter arguments'
            };
            let result = getGreaterMethodHappyTicket(context);
            assert.isFalse(result, invalidData);
        });
    });
}