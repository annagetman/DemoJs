import { longestPalindrome } from '../src/task4.js';

export const test4 = (assert) => {
    describe('Task 4 - "Palindrome"', () => {
        it('Function works correctly', () => {
            let result = longestPalindrome('2552698');
            assert.deepEqual(result, '2552');
        });
        it('Function works correctly', () => {
            let result = longestPalindrome('6987447');
            assert.deepEqual(result, '7447');
        });
        it('Invalid number for palindrome', () => {
            let result = longestPalindrome('236');
            assert.deepEqual(result, 0);
        });
        it('Enter bigger number', () => {
            let result = longestPalindrome('1');
            assert.equal(result, 0);
        });
        it('Test to work with no arguments', () => {
            let result = longestPalindrome();
            assert.isFalse(result);
        });
    
    });
}