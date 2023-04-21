const express = require('express')
const app = express();
const ExpressError = require("./expressError")

const { convertAndValidateNumsArray, evalMode, evalMean, evalMedian } = require('./helpers.test')

app.get('/mean', function (req, rest, next) {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma=separted list of numbers', 400)
    }
    let numsString = req.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numsString);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message)
    }

    let result = {
        operation: 'mean',
        result: findmean(nums)
    }

    return res.send(result);
});


app.get('/median', function (req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma=separted list of numbers', 400)
    }
    let numsString = req.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numsString);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message)
    }

    let result = {
        operation: 'median',
        result: findmean(nums)
    }

    return res.send(result);

});

app.get('/mode', function (req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma=separted list of numbers', 400)
    }
    let numsString = req.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numsString);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message)
    }

    let result = {
        operation: 'mode',
        result: findmean(nums)
    }

    return res.send(result);

});

app.use(function (req, res, next) {
    const err = new ExpressError("Not Found", 404);
    return next(err);
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);

    return res.json({
        error: err,
        message: err.message
    });
});


app.listen(3000, function () {
    console.log(`Server starting on port 3000`);
});



