const str = "  Hello, World!  ";

console.log(str.trim());                 // "Hello, World!"
console.log(str.toUpperCase());          // "  HELLO, WORLD!  "
console.log(str.toLowerCase());
console.log(str.includes("World"));      // true
console.log(str.indexOf("World"));       // 9
console.log(str.slice(2, 7));            // "Hello"
console.log(str.substring(2, 7));        // "Hello"
console.log(str.replace("World", "JS")); // "  Hello, JS!  "
console.log("a,b,c".split(","));         // ["a","b","c"]
console.log("ab".repeat(3));             // "ababab"
console.log("abc".padStart(5, "0"));     // "00abc"
console.log("abc".padEnd(5, "*"));       // "abc**"
console.log("hello".startsWith("he"));   // true
console.log("hello".endsWith("lo"));     // true
console.log("hello".at(-1));             // "o"