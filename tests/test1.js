import { createChessBoard } from '../src/task1.js';

export const test1 = (assert) => {
    describe('Task 1', function () {
        it('function work correctly', function () {
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
        //it('width is bigger than 0', function () {
        //    let invalidData = {
        //        status: 'failed',
        //        reason: 'width and height must be bigger than 0'
        //    };
        //    let result = createChessBoard(0, 5, 'x');

        //    let invalidDataString = JSON.stringify(invalidData);
        //    let resultString = JSON.stringify(result);

        //    assert.equal(resultString, invalidDataString);
        //});
        //it('height is bigger than 0', function () {
        //    let invalidData = {
        //        status: 'failed',
        //        reason: 'width and height must be bigger than 0'
        //    };
        //    let result = createChessBoard(25, 0, 'x');

        //    let invalidDataString = JSON.stringify(invalidData);
        //    let resultString = JSON.stringify(result);

        //    assert.equal(resultString, invalidDataString);
        //});
        it('function call arguments is not empty', function () {
            let invalidData = {
                status: 'failed',
                reason: 'please, put width, length and symbol to the function call'
            };
            let result = createChessBoard();

            let invalidDataString = JSON.stringify(invalidData);
            let resultString = JSON.stringify(result);

            assert.equal(resultString, invalidDataString);
        });
        it('symbol is a string', function () {
            let invalidData = {
                status: 'failed',
                reason: 'symbol must be a string'
            }
            let result = createChessBoard(2, 2, 1);

            let invalidDataString = JSON.stringify(invalidData);
            let resultString = JSON.stringify(result);

            assert.equal(resultString, invalidDataString);
        });
    });
}