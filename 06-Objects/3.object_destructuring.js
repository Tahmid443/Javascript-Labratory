const user = { name: "Alice", age: 25, city: "NYC" };

const { name, age } = user;
console.log(name, age);

// Rename
const { name: userName } = user;
console.log(userName);

// Defaults
const { country = "USA" } = user;
console.log(country);

// Nested
const data = { user: { name: "Bob" } };
const { user: { name: bobName } } = data;
console.log(bobName);

// Rest
const { name: n, ...rest } = user;
console.log(rest); // { age:25, city:"NYC" }

// Function params
function greet({ name, age }) {
    return `${name} is ${age}`;
}
console.log(greet(user));