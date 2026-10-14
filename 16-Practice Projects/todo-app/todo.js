const form = document.getElementById("form");
const input = document.getElementById("input");
const list = document.getElementById("list");

let todos = JSON.parse(localStorage.getItem("todos") || "[]");

function save() { localStorage.setItem("todos", JSON.stringify(todos)); }

function render() {
    list.innerHTML = "";
    todos.forEach((t, i) => {
        const li = document.createElement("li");
        li.className = t.done ? "done" : "";
        li.innerHTML = `<span>${t.text}</span><button data-i="${i}">✕</button>`;
        li.querySelector("span").addEventListener("click", () => {
            todos[i].done = !todos[i].done;
            save(); render();
        });
        li.querySelector("button").addEventListener("click", () => {
            todos.splice(i, 1);
            save(); render();
        });
        list.appendChild(li);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!input.value.trim()) return;
    todos.push({ text: input.value.trim(), done: false });
    input.value = "";
    save(); render();
});

render();