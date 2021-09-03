import { createChessBoard } from '../src/task1.js';

export const test1 = (assert) => {
    describe('Task 1', function () {
        it('function work', function () {
            const str = ' * \n* *\n * \n';
            assert.equal(createChessBoard(3, 3, '*'), str);
        });
        it('type is string', function () {
            assert.typeOf(createChessBoard(1, 1, "*"), 'string');
        });
        it('symbol is correct', function () {
            const symbol = '*';
            const result = createChessBoard(3, 3, symbol);
            assert.equal(symbol, '*');
        });
        it('width and length must be bigger 0', function () {
            let invalidData = {
                status: 'fail',
                reason: 'width and length must be bigger 0'
            };
            let result = createChessBoard(0, 3, '*');

            assert.deepEqual(result, invalidData);
        });

        it('width and length must be bigger 0', function () {
            let invalidData = {
                status: 'fail',
                reason: 'width and length must be bigger 0'
            };
            let result = createChessBoard(88, 0, '*');

            assert.deepEqual(result, invalidData);
        });
        it('function call arguments is not empty', function () {
            let invalidData = {
                status: 'fail',
                reason: 'enter width, length and symbol'
            };
            let result = createChessBoard();

            assert.deepEqual(result, invalidData);
        });
        it('symbol is a string', function () {
            let invalidData = {
                status: 'fail',
                reason: 'symbol must be a string'
            }
            let result = createChessBoard(2, 2, 1);

            assert.deepEqual(result, invalidData);
        });
    });
}