function greet(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}
console.log(greet());              // Hello, Guest!
console.log(greet("Alice"));       // Hello, Alice!
console.log(greet("Bob", "Hi"));   // Hi, Bob!

// Rest params
function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6

// Arguments (old way - avoid)
function old() {
    return arguments.length;
}
console.log(old(1, 2, 3)); // 3

// Multiple return values via array/object
function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}
const [min, max] = minMax([3, 1, 4, 1, 5]);
console.log(min, max); // 1 5