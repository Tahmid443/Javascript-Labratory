// Primitive types
let str = "hello";           // string
let num = 42;                // number
let big = 9007199254740991n; // bigint
let bool = true;             // boolean
let undef;                   // undefined
let nul = null;              // null
let sym = Symbol("id");      // symbol

// Reference type
let obj = { name: "Alice" };
let arr = [1, 2, 3];
let fn = function () { };

console.log(typeof str);   // "string"
console.log(typeof num);   // "number"
console.log(typeof big);   // "bigint"
console.log(typeof bool);  // "boolean"
console.log(typeof undef); // "undefined"
console.log(typeof nul);   // "object"  (famous JS quirk)
console.log(typeof sym);   // "symbol"
console.log(typeof obj);   // "object"
console.log(typeof arr);   // "object"
console.log(typeof fn);    // "function"