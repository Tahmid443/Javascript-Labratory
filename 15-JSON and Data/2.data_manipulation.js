const users = [
    { id: 1, name: "Alice", age: 30, city: "NYC" },
    { id: 2, name: "Bob", age: 17, city: "LA" },
    { id: 3, name: "Carol", age: 25, city: "NYC" }
];

// Group by city
const byCity = users.reduce((acc, u) => {
    (acc[u.city] ||= []).push(u);
    return acc;
}, {});
console.log(byCity);

// Average age
const avg = users.reduce((s, u) => s + u.age, 0) / users.length;
console.log(avg);

// Sort by name
const sorted = [...users].sort((a, b) => a.name.localeCompare(b.name));
console.log(sorted.map(u => u.name));

// Find + update (immutably)
const updated = users.map(u => u.id === 2 ? { ...u, age: 18 } : u);
console.log(updated[1]);

// Flatten nested
const nested = [[1, 2], [3, [4, 5]]];
console.log(nested.flat(Infinity)); // [1,2,3,4,5]