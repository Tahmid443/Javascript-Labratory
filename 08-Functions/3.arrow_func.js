// Basic
const add = (a, b) => a + b;

// Single param (parens optional)
const square = x => x * x;

// No params
const hello = () => "hi";

// Block body
const greet = name => {
    const msg = `Hello, ${name}`;
    return msg;
};

// Returning object literal (wrap in parens)
const makeUser = name => ({ name, age: 0 });

// No `this` binding
const obj = {
    name: "Alice",
    regular() { return this.name; },
    arrow: () => this?.name
};
console.log(obj.regular()); // "Alice"
console.log(obj.arrow());   // undefined