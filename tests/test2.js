import { getAnalysisofEnvelopes } from '../src/task2.js';

export const test2 = (assert) => {
    describe('Task 2', function () {
        it('function work correctly', function () {
            const envelopes1 = { a: 6, b: 8 };
            const envelopes2 = { c: 5, d: 7 };
            assert.equal(getAnalysisofEnvelopes(envelopes1, envelopes2), undefined); //1
        });
        it('function work correctly', function () {
            const envelopes1 = { a: 4, b: 5 };
            const envelopes2 = { c: 5, d: 7 };
            assert.equal(getAnalysisofEnvelopes(envelopes1, envelopes2), undefined); //2
        });
        it('function work correctly', function () {
            const envelopes1 = { a: 5, b: 5 };
            const envelopes2 = { c: 5, d: 5 };
            assert.equal(getAnalysisofEnvelopes(envelopes1, envelopes2), undefined); // 0
        });
    })
}