const obj = { name: "Alice", age: 25, hobbies: ["reading"] };

// Object -> JSON string
const json = JSON.stringify(obj);
console.log(json); // '{"name":"Alice",...}'

// Pretty print
console.log(JSON.stringify(obj, null, 2));

// JSON string -> Object
const parsed = JSON.parse(json);
console.log(parsed.name); // "Alice"

// Error handling
try {
    JSON.parse("{bad");
} catch (e) {
    console.log("Invalid JSON");
}

// Deep clone
const clone = JSON.parse(JSON.stringify(obj));
clone.hobbies.push("coding");
console.log(obj.hobbies.length); // 1 (original unchanged)