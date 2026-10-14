// typeof
console.log(typeof 42);      // "number"

// delete
const obj = { a: 1, b: 2 };
delete obj.a;
console.log(obj); // { b: 2 }

// void
console.log(void 0); // undefined

// + and - unary
console.log(+"42");  // 42
console.log(-"42");  // -42

// !
console.log(!!"hello"); // true