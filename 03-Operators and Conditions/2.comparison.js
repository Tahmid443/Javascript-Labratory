// == vs ===
console.log(5 == "5");   // true  (loose)
console.log(5 === "5");  // false (strict)

console.log(null == undefined);  // true
console.log(null === undefined); // false

console.log(NaN === NaN);        // false
console.log(Object.is(NaN, NaN));// true

// Relational
console.log(5 > 3);   // true
console.log(5 >= 5);  // true
console.log("a" < "b"); // true (lexicographic)