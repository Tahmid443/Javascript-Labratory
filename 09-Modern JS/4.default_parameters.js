function greet(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}`;
}
console.log(greet());
console.log(greet("Alice"));

// Defaults can use earlier params
function range(start = 0, end = start + 5) {
    return [start, end];
}
console.log(range());    // [0, 5]
console.log(range(10));  // [10, 15]

// Destructured defaults
function createUser({ name = "Anonymous", age = 0 } = {}) {
    return { name, age };
}
console.log(createUser());
console.log(createUser({ name: "Bob" }));