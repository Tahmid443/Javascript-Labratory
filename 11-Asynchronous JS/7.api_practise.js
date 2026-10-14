// Simple API fetch + render (Node 18+)
async function fetchUsers() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await res.json();
        users.slice(0, 3).forEach(u => {
            console.log(`${u.id}: ${u.name} (${u.email})`);
        });
    } catch (e) {
        console.error("Error:", e.message);
    }
}
// fetchUsers();