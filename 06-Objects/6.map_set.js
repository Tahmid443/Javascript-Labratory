// Map
const map = new Map();
map.set("a", 1);
map.set("b", 2);
console.log(map.get("a"));    // 1
console.log(map.has("b"));    // true
console.log(map.size);        // 2
map.delete("a");
console.log([...map.keys()]); // ["b"]

// Set
const set = new Set([1, 2, 2, 3, 3, 3]);
console.log(set);            // Set {1,2,3}
set.add(4);
console.log(set.has(2));     // true
console.log([...set]);       // [1,2,3,4]

// Remove duplicates
const arr = [1, 1, 2, 3, 3];
console.log([...new Set(arr)]); // [1,2,3]