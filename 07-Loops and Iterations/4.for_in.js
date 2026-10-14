const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    console.log(key, obj[key]);
}

// Arrays with for-in gives indexes (avoid for arrays)
const arr = ["x", "y", "z"];
for (const idx in arr) {
    console.log(idx, arr[idx]);
}