const arr = [10, 20, 30];
for (const val of arr) {
    console.log(val);
}

// String iteration
for (const ch of "abc") {
    console.log(ch);
}

// With entries
for (const [i, val] of arr.entries()) {
    console.log(i, val);
}

// Map
const map = new Map([["a", 1], ["b", 2]]);
for (const [k, v] of map) {
    console.log(k, v);
}