function delay(ms, value) {
    return new Promise(res => setTimeout(() => res(value), ms));
}

async function run() {
    const a = await delay(100, "A");
    const b = await delay(100, "B");
    console.log(a, b);

    // Parallel
    const [x, y] = await Promise.all([
        delay(100, 1),
        delay(100, 2)
    ]);
    console.log(x, y);
}
run();

// Error handling
async function safe() {
    try {
        await Promise.reject(new Error("boom"));
    } catch (e) {
        console.log("Caught:", e.message);
    }
}
safe();