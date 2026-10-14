function doTask(task, callback) {
    console.log(`Doing: ${task}`);
    callback();
}

doTask("homework", () => console.log("Done!"));

// Array callbacks
[1, 2, 3].forEach(n => console.log(n));

// Custom callback with args
function process(arr, cb) {
    const result = [];
    for (const item of arr) {
        result.push(cb(item));
    }
    return result;
}
console.log(process([1, 2, 3], n => n * 10)); // [10,20,30]