// && (AND), || (OR), ! (NOT)
console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false

// Short-circuit
const user = null;
console.log(user && user.name); // null (no error)

// Default value pattern
function greet(name) {
    name = name || "Guest";
    return `Hello, ${name}`;
}
console.log(greet());       // Hello, Guest
console.log(greet("Alice"));// Hello, Alice

// Nullish coalescing (??)
const value = 0 ?? "default";  // 0 (only null/undefined trigger)
const value2 = 0 || "default"; // "default"

// Optional chaining (?.)
const obj = { a: { b: 1 } };
console.log(obj?.a?.b); // 1
console.log(obj?.x?.y); // undefined