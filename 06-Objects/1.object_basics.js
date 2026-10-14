const user = {
    name: "Alice",
    age: 25,
    "favorite color": "blue",
    greet() { return `Hi, I'm ${this.name}`; }
};

console.log(user.name);
console.log(user["age"]);
console.log(user["favorite color"]);
console.log(user.greet());

// Add / modify / delete
user.email = "a@b.com";
user.age = 26;
delete user.email;

// Check existence
console.log("name" in user); // true

// Keys / values / entries
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));