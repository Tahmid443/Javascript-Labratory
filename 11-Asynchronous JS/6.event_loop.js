console.log("1 (sync)");

setTimeout(() => console.log("2 (macrotask)"), 0);

Promise.resolve().then(() => console.log("3 (microtask)"));

console.log("4 (sync)");

// Output order: 1, 4, 3, 2
// Microtasks (promises) run before macrotasks (setTimeout)