// var, let, const
var oldWay = "function scoped";
let modern = "block scoped";
const constant = "cannot be reassigned";

modern = "reassigned"; // OK
// constant = "nope";  // Error

console.log(oldWay, modern, constant);

// Block scope demo
{
    let blockVar = "inside";
    var funcVar = "leaks out";
}
// console.log(blockVar); // ReferenceError
console.log(funcVar); // "leaks out"