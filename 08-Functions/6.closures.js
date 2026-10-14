function counter() {
    let count = 0;
    return {
        inc: () => ++count,
        dec: () => --count,
        get: () => count
    };
}
const c = counter();
c.inc(); c.inc(); c.dec();
console.log(c.get()); // 1

// Classic loop bug (var) vs fix (let)
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 0); // 3,3,3
}
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log("let:", i), 0); // 0,1,2
}