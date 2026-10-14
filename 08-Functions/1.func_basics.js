// Function declaration (hoisted)
function add(a, b) {
  return a + b;
}

// Function expression (not hoisted)
const sub = function (a, b) {
  return a - b;
};

// Named function expression
const mul = function multiply(a, b) {
  return a * b;
};

console.log(add(2, 3)); // 5
console.log(sub(5, 2)); // 3
console.log(mul(3, 4)); // 12