// (See 06-objects/spread-rest.js for full example)
const arr = [1, 2, 3];
console.log(Math.max(...arr)); // 3
const fn = (...args) => args.length;
console.log(fn(1, 2, 3, 4)); // 4