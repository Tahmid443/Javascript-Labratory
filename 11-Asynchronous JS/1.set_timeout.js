console.log("1");
setTimeout(() => console.log("3 (after 1s)"), 1000);
console.log("2");

// With args
setTimeout((name) => console.log(`Hi ${name}`), 500, "Alice");

// Cancel
const id = setTimeout(() => console.log("never"), 2000);
clearTimeout(id);