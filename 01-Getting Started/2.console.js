// CONSOLE METHODS
console.log("Basic log");
console.info("Info message");
console.warn("Warning message");
console.error("Error message");

// Grouping
console.group("User Info");
console.log("Name: Alice");
console.log("Age: 25");
console.groupEnd();

// Table
console.table([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
]);

// Time
console.time("loop");
for (let i = 0; i < 100000; i++) { }
console.timeEnd("loop");

// Assert
console.assert(1 === 2, "This will show because condition is false");