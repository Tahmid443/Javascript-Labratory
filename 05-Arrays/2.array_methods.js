const arr = [1, 2, 3, 4, 5];

// slice (non-mutating)
console.log(arr.slice(1, 3)); // [2,3]

// splice (mutating)
const copy = [...arr];
copy.splice(1, 2, 99);
console.log(copy); // [1, 99, 4, 5]

// concat
console.log([1, 2].concat([3, 4])); // [1,2,3,4]

// join
console.log(["a", "b", "c"].join("-")); // "a-b-c"

// reverse (mutating)
console.log([1, 2, 3].reverse()); // [3,2,1]

// indexOf / includes
console.log(arr.indexOf(3)); // 2
console.log(arr.includes(4)); // true

// flat / flatMap
console.log([1, [2, [3]]].flat(2)); // [1,2,3]
console.log([1, 2].flatMap(x => [x, x * 2])); // [1,2,2,4]

// fill
console.log(new Array(3).fill(0)); // [0,0,0]