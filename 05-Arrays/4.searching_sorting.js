const arr = [5, 2, 8, 1, 9];

// sort (mutating, and lexicographic by default!)
console.log([10, 2, 5].sort());              // [10, 2, 5] 😱
console.log([10, 2, 5].sort((a, b) => a - b));  // [2, 5, 10]

// find / findIndex
console.log(arr.find(n => n > 4));       // 5
console.log(arr.findIndex(n => n > 4));  // 0

// some / every
console.log(arr.some(n => n > 8));  // true
console.log(arr.every(n => n > 0)); // true

// Custom sort
const people = [
    { name: "Bob", age: 30 },
    { name: "Alice", age: 25 }
];
people.sort((a, b) => a.age - b.age);
console.log(people);