const p = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done"), 500);
});

p.then(v => console.log(v))
    .catch(e => console.error(e))
    .finally(() => console.log("finished"));

// Promise.all
Promise.all([
    Promise.resolve(1),
    Promise.resolve(2)
]).then(([a, b]) => console.log(a + b)); // 3

// Promise.race
Promise.race([
    new Promise(r => setTimeout(() => r("fast"), 100)),
    new Promise(r => setTimeout(() => r("slow"), 200))
]).then(console.log); // "fast"

// Promise.allSettled
Promise.allSettled([
    Promise.resolve(1),
    Promise.reject("err")
]).then(results => console.log(results));