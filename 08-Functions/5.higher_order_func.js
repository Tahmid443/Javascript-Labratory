// Function that takes/returns a function
function multiplier(factor) {
    return function (n) {
        return n * factor;
    };
}
const double = multiplier(2);
console.log(double(5)); // 10

// Function that takes function
function applyTwice(fn, x) {
    return fn(fn(x));
}
console.log(applyTwice(n => n + 1, 5)); // 7

// Practical
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const addOne = n => n + 1;
const timesTwo = n => n * 2;
console.log(compose(addOne, timesTwo)(5)); // 11