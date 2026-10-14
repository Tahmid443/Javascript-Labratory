try {
    JSON.parse("{invalid");
} catch (err) {
    console.log("Caught:", err.message);
} finally {
    console.log("Always runs");
}

// Specific error types
try {
    null.foo;
} catch (e) {
    if (e instanceof TypeError) {
        console.log("Type error!");
    }
}

// Async
async function load() {
    try {
        const res = await fetch("https://bad.url");
    } catch (e) {
        console.log("Fetch failed:", e.message);
    }
}
// load();