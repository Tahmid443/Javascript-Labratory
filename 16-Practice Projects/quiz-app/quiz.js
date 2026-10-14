const questions = [
    { q: "2 + 2 = ?", choices: ["3", "4", "5"], answer: "4" },
    { q: "Capital of France?", choices: ["London", "Paris", "Rome"], answer: "Paris" },
    { q: "JS stands for?", choices: ["Java Source", "JavaScript", "JustScript"], answer: "JavaScript" }
];

const qEl = document.getElementById("q");
const choicesEl = document.getElementById("choices");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("next");

let idx = 0;
let score = 0;

function render() {
    const cur = questions[idx];
    qEl.textContent = `Q${idx + 1}/${questions.length}: ${cur.q}`;
    choicesEl.innerHTML = "";
    cur.choices.forEach(c => {
        const btn = document.createElement("button");
        btn.textContent = c;
        btn.addEventListener("click", () => answer(c, btn));
        choicesEl.appendChild(btn);
    });
    scoreEl.textContent = "";
    nextBtn.style.display = "none";
}

function answer(choice, btn) {
    const correct = questions[idx].answer;
    choicesEl.querySelectorAll("button").forEach(b => {
        b.disabled = true;
        if (b.textContent === correct) b.classList.add("correct");
    });
    if (choice === correct) score++;
    else btn.classList.add("wrong");
    scoreEl.textContent = `Score: ${score}/${idx + 1}`;
    nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
    idx++;
    if (idx >= questions.length) {
        qEl.textContent = `Done! Score: ${score}/${questions.length}`;
        choicesEl.innerHTML = "";
        nextBtn.style.display = "none";
    } else render();
});

render();