const obj = {
    name: "Alice",
    greet() {
        return `Hi, ${this.name}`;
    }
};
console.log(obj.greet()); // "Hi, Alice"

// Lost context
const fn = obj.greet;
// console.log(fn()); // Error or "undefined"

// Bind
const bound = obj.greet.bind(obj);
console.log(bound()); // "Hi, Alice"

// Arrow functions don't have own `this`
const obj2 = {
    name: "Bob",
    greet: () => `Hi, ${this?.name}`
};
console.log(obj2.greet()); // "Hi, undefined"