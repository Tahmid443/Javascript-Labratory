// Browser / Node 18+
async function getUser(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
}

// getUser(1).then(u => console.log(u.name));

// POST
async function createPost(data) {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    return res.json();
}
// createPost({ title: "Hi" }).then(console.log);