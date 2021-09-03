import { getAnalysisofEnvelopes } from '../src/task2.js';

export const test2 = (assert) => {
    describe('Task 2 - "Analysis of envelopes"', function () {
        it('function work correctly', function () {
            const envelopes1 = { a: 6, b: 8 };
            const envelopes2 = { c: 5, d: 7.7 };

            assert.equal(getAnalysisofEnvelopes(envelopes1, envelopes2), 1);  
        });
        it('function work correctly', function () {
            const envelopes1 = { a: 4, b: 5 };
            const envelopes2 = { c: 5.5, d: 7 };
            assert.equal(getAnalysisofEnvelopes(envelopes1, envelopes2), 2);  
        });
        it('function work correctly', function () {
            const envelopes1 = { a: 5, b: 5 };
            const envelopes2 = { c: 5, d: 5 };
            assert.equal(getAnalysisofEnvelopes(envelopes1, envelopes2), 0);  
        });
        it('function call arguments is objects', () => {
            const envelopes1 = '*';
            const envelopes2 = 7;
            const invalidData = {
                status: 'fail',
                reason: 'arguments must be an objects'
            };
            let result = getAnalysisofEnvelopes(envelopes1, envelopes2);
            assert.deepEqual(result, invalidData);
        });
        it('function have arguments', () => {
            const invalidData = {
                status: 'fail',
                reason: 'enter 2 arguments'
            };
            let result = getAnalysisofEnvelopes();
            assert.deepEqual(result, invalidData);
        });
        it('function have arguments', () => {
            const envelopes1 = { a: 5, b: 5 };
            const invalidData = {
                status: 'fail',
                reason: 'enter 2 arguments'
            };
            let result = getAnalysisofEnvelopes(envelopes1);
            assert.deepEqual(result, invalidData);
        });
    })
}