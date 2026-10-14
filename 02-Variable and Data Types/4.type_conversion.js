// Explicit conversion
Number("42");       // 42
Number("42px");     // NaN
Number(true);       // 1
Number(null);       // 0
Number(undefined);  // NaN

String(42);         // "42"
String(true);       // "true"
String(null);       // "null"

Boolean(0);         // false
Boolean("");        // false
Boolean("hi");      // true
Boolean([]);        // true  (quirk!)
Boolean({});        // true

// parseInt / parseFloat
parseInt("42px");   // 42
parseFloat("3.14abc"); // 3.14

// Implicit conversion
"5" + 3;   // "53"  (string concat)
"5" - 3;   // 2     (numeric)
"5" * "2"; // 10
1 + true;  // 2