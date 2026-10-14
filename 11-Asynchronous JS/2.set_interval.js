let count = 0;
const id = setInterval(() => {
    count++;
    console.log("tick", count);
    if (count === 3) clearInterval(id);
}, 1000);

// Use in browser: stop after 3s