const user = {
    name: "Alice",
    address: { city: "NYC" }
};

console.log(user.address?.city);        // "NYC"
console.log(user.contact?.phone);       // undefined (no error)

// With method call
const obj = { greet: () => "hi" };
console.log(obj.greet?.());  // "hi"
console.log(obj.missing?.()); // undefined

// With bracket
const key = "name";
console.log(user?.[key]); // "Alice"