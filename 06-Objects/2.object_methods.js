const target = { a: 1 };
const source = { b: 2, c: 3 };

// Object.assign (mutates target)
const merged = Object.assign({}, target, source);
console.log(merged); // { a:1, b:2, c:3 }

// Spread (cleaner)
const merged2 = { ...target, ...source };
console.log(merged2);

// Freeze / seal
const frozen = Object.freeze({ x: 1 });
const sealed = Object.seal({ y: 1 });

// hasOwnProperty
console.log(target.hasOwnProperty("a")); // true

// fromEntries
const entries = [["a", 1], ["b", 2]];
console.log(Object.fromEntries(entries)); // { a:1, b:2 }