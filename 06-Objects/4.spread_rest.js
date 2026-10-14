// Spread in arrays
const a = [1, 2];
const b = [3, 4];
console.log([...a, ...b]); // [1,2,3,4]
console.log(Math.max(...a)); // 2

// Spread in objects
const obj1 = { x: 1 };
const obj2 = { y: 2 };
console.log({ ...obj1, ...obj2 }); // { x:1, y:2 }

// Rest in function params
function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10