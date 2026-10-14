// (See 05 and 06 for full examples)
const { a, b = 10, ...rest } = { a: 1, c: 3, d: 4 };
console.log(a, b, rest); // 1 10 { c:3, d:4 }

const [x, , z] = [1, 2, 3];
console.log(x, z); // 1 3