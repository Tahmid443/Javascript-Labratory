const name = "Alice";
const age = 25;

// Basic interpolation
console.log(`Name: ${name}, Age: ${age}`);

// Expression
console.log(`Sum: ${2 + 3}`);
console.log(`Next year: ${age + 1}`);

// Multi-line
const html = `
  <div>
    <h1>${name}</h1>
    <p>Age: ${age}</p>
  </div>
`;
console.log(html);

// Tagged template
function tag(strings, ...values) {
    console.log(strings); // ["Hello, ", "!"]
    console.log(values);  // ["Alice"]
    return strings[0] + values[0].toUpperCase() + strings[1];
}
console.log(tag`Hello, ${name}!`); // "Hello, ALICE!"