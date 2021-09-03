import { longestPalindrome } from '../src/task4.js';

export const test4 = (assert) => {
    describe('Task 4', function () {
        it('function work', function () {
            let result = longestPalindrome('2552698');
            assert.deepEqual(result, '2552');
        });
        it('function work', function () {
            let result = longestPalindrome('6987447');
            assert.deepEqual(result, '7447');
        });
        it('num is not palindrom', function () {
            let result = longestPalindrome('236');
            assert.deepEqual(result, 0);
        });
        it('enter bigger namber', function () {
            let result = longestPalindrome('1');
            assert.equal(result, 0);
        });
        it('function have not arguments', function()  {
            let result = longestPalindrome();
            assert.isFalse(result);
        });
    
    });
}