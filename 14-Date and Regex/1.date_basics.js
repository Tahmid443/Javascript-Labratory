const now = new Date();
console.log(now);

const specific = new Date("2024-01-15");
console.log(specific);

const fromParts = new Date(2024, 0, 15, 10, 30); // month is 0-indexed!
console.log(fromParts);

console.log(now.getFullYear());
console.log(now.getMonth());     // 0-11
console.log(now.getDate());      // 1-31
console.log(now.getDay());       // 0-6 (Sun-Sat)
console.log(now.getHours());
console.log(now.getMinutes());

console.log(now.toISOString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());