const nums = [1, 2, 3, 4, 5];

// map
console.log(nums.map(n => n * 2)); // [2,4,6,8,10]

// filter
console.log(nums.filter(n => n % 2 === 0)); // [2,4]

// reduce
console.log(nums.reduce((acc, n) => acc + n, 0)); // 15

// Chaining
const result = nums
    .filter(n => n > 2)
    .map(n => n * 10)
    .reduce((a, b) => a + b, 0);
console.log(result); // 120

// Real world: users
const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 17 },
    { name: "Carol", age: 25 }
];
const adults = users.filter(u => u.age >= 18).map(u => u.name);
console.log(adults); // ["Alice","Carol"]