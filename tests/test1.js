import { createChessBoard } from '../src/task1.js';

export const test1 = (assert) => {
    describe('Task 1 - "Chess board"', () => {
        it('Function works correctly', () => {
            const str = ' * \n* *\n * \n';
            assert.equal(createChessBoard(3, 3, '*'), str);
        });
        it('Type is string', () => {
            assert.typeOf(createChessBoard(1, 1, "*"), 'string');
        });
        it('Valid Symbol', () => {
            const symbol = '*';
            assert.equal(symbol, '*');
        });
        it('Width and length must be bigger 0', () => {
            let invalidData = {
                status: 'fail',
                reason: 'Width and length must be bigger 0'
            };
            let result = createChessBoard(0, 3, '*');

            assert.deepEqual(result, invalidData);
        });

        it('Width and length must be bigger 0', () => {
            let invalidData = {
                status: 'fail',
                reason: 'Width and length must be bigger 0'
            };
            let result = createChessBoard(88, 0, '*');

            assert.deepEqual(result, invalidData);
        });
        it('Test to work with no arguments', () => {
            let invalidData = {
                status: 'fail',
                reason: 'Enter width, length and symbol'
            };
            let result = createChessBoard();

            assert.deepEqual(result, invalidData);
        });
        it('Symbol must be a string', () => {
            let invalidData = {
                status: 'fail',
                reason: 'Symbol must be a string'
            }
            let result = createChessBoard(2, 2, 1);

            assert.deepEqual(result, invalidData);
        });
    });
}