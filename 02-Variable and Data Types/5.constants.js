const PI = 3.14159;
// PI = 3;  // TypeError

// But object contents ARE mutable
const user = { name: "Alice" };
user.name = "Bob";  // OK
// user = {};       // TypeError

// Freeze for true immutability
const frozen = Object.freeze({ x: 1 });
frozen.x = 99; // silently fails (or throws in strict mode)
console.log(frozen.x); // 1