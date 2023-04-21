const {
    evalMode,
    evalMean,
    evalMedian
} = require('./helpers');

describe("#evalMode", function () {
    it("finds the mode", function () {
        expect(evalMode([1, 1, 1, 2, 2, 3])).toEqual(1)
    })
})

describe("#evalMedian", function () {
    it("finds the Median of an evan set", function () {
        expect(evalMedian([1, -1, 4, 2])).toEqual(1.5)
    })
})

describe("#evalMean", function () {
    it("finds the mean of an empty array", function () {
        expect(evalMean([])).toEqual(0)
    })
    it("finds the mean of an array of numbers", function () {
        expect(evalMean([1, -1, 4, 2])).toEqual(1)
    })
})