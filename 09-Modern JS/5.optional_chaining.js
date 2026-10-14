const user = { profile: { name: "Alice" } };
console.log(user.profile?.name);    // "Alice"
console.log(user.settings?.theme);  // undefined

// With method
const api = { get: () => "data" };
console.log(api.get?.());       // "data"
console.log(api.post?.());      // undefined

// Nullish coalescing combo
const theme = user.settings?.theme ?? "dark";
console.log(theme); // "dark"