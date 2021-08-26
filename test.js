// JavaScript source code
describe("sum", function () {

    it("x+y", function () {
        assert.equal(sum(2, 3), 5);
    });

    it("x+y", function () {
        assert.equal(sum(3, 0), 6);
    });
    it("x+y", function () {
        assert.equal(sum(1, 8), 9);
    });
    it("x+y", function () {
        assert.equal(sum(100, 1), 101);
    });
    it("x+y", function () {
        assert.equal(sum(0, 0), 0);
    });
    it("для отрицательных n возвращает NaN", function () {
        assert.isNaN(sum(-2, -1));
    });
});

//describe('createChessBoard', function () {
//    it('Board', function () {
//        assert.equal(createChessBoard(4, 6), typeof(String))
//    })
//})