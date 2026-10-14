const re = /hello/i;
console.log(re.test("Hello World")); // true

// exec
const m = /(\d+)-(\d+)/.exec("10-20");
console.log(m[0], m[1], m[2]); // "10-20", "10", "20"

// match / matchAll
console.log("a1b2c3".match(/\d/g)); // ["1","2","3"]

// replace
console.log("hello world".replace(/o/g, "0")); // "hell0 w0rld"

// split
console.log("a1b2c3".split(/\d/)); // ["a","b","c"]

// Common patterns
const email = /^[\w.-]+@[\w.-]+\.\w+$/;
console.log(email.test("a@b.com")); // true

// Named groups
const dateRe = /(?<year>\d{4})-(?<month>\d{2})/;
const { groups } = dateRe.exec("2024-01");
console.log(groups.year, groups.month);

// Flags: g (global), i (insensitive), m (multiline), s (dotall), u (unicode)