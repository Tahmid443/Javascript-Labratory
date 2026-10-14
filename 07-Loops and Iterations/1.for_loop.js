for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Nested
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        // ...
    }
}

// break / continue
for (let i = 0; i < 10; i++) {
    if (i === 3) continue;
    if (i === 7) break;
    console.log(i);
}