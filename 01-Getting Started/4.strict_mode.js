"use strict";

// Without strict mode, this creates a global variable (bad!)
// With strict mode, it throws ReferenceError
try {
    undeclaredVar = 10;
} catch (e) {
    console.log("Strict mode error:", e.message);
}

// Strict mode also prevents duplicate params, octal literals, etc.
function safe(x) {
    "use strict";
    return x * 2;
}
console.log(safe(5)); // 10