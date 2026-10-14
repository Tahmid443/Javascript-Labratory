// console methods for debugging
const data = { users: [{ id: 1, name: "Alice" }] };
console.log("Data:", data);
console.table(data.users);
console.time("op");
// ...some operation
console.timeEnd("op");

// debugger statement (pauses in devtools)
function buggy(x) {
    // debugger;
    return x * 2;
}

// Common bug: wrong variable
let total = 0;
[1, 2, 3].forEach(n => total += n);
console.log(total); // 6

// Common bug: off-by-one
const arr = [1, 2, 3];
for (let i = 0; i <= arr.length; i++) { /* bug: should be < */ }