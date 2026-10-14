const now = Date.now(); // ms since epoch
console.log(now);

const d = new Date(now);
console.log(d);

// Difference in days
const d1 = new Date("2024-01-01");
const d2 = new Date("2024-01-15");
const days = (d2 - d1) / (1000 * 60 * 60 * 24);
console.log(days); // 14

// Performance
const t0 = performance.now();
for (let i = 0; i < 1e6; i++) { }
const t1 = performance.now();
console.log(`Took ${t1 - t0}ms`);