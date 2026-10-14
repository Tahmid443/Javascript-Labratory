const display = document.getElementById("display");
let current = "0";
let prev = null;
let op = null;

function update() {
    display.textContent = current;
}

function inputNum(n) {
    if (current === "0" && n !== ".") current = n;
    else if (n === "." && current.includes(".")) return;
    else current += n;
    update();
}

function chooseOp(o) {
    if (op && prev !== null) equals();
    prev = parseFloat(current);
    op = o;
    current = "0";
}

function equals() {
    if (op === null || prev === null) return;
    const a = prev, b = parseFloat(current);
    let result;
    switch (op) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "*": result = a * b; break;
        case "/": result = b === 0 ? "Error" : a / b; break;
        case "%": result = a % b; break;
    }
    current = String(result);
    prev = null;
    op = null;
    update();
}

function clear() { current = "0"; prev = null; op = null; update(); }
function del() { current = current.length > 1 ? current.slice(0, -1) : "0"; update(); }

document.querySelector(".keys").addEventListener("click", (e) => {
    const t = e.target;
    if (t.dataset.num) inputNum(t.dataset.num);
    else if (t.dataset.op) chooseOp(t.dataset.op);
    else if (t.dataset.action === "equals") equals();
    else if (t.dataset.action === "clear") clear();
    else if (t.dataset.action === "delete") del();
});