const [a, b, c] = [1, 2, 3];
console.log(a, b, c); // 1 2 3

// Skip
const [, second] = [1, 2, 3];
console.log(second); // 2

// Rest
const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest);  // [2,3,4]

// Default values
const [x = 10, y = 20] = [5];
console.log(x, y); // 5 20

// Swap
let p = 1, q = 2;
[p, q] = [q, p];
console.log(p, q); // 2 1

// Nested
const [[n1], [n2]] = [[1], [2]];
console.log(n1, n2);