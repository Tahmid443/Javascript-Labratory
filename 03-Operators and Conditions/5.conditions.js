// if / else if / else
let score = 85;
if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else {
    console.log("F");
}

// Ternary
const status = score >= 60 ? "pass" : "fail";
console.log(status);

// switch
const day = "Mon";
switch (day) {
    case "Mon":
    case "Tue":
        console.log("Early week");
        break;
    case "Sat":
    case "Sun":
        console.log("Weekend");
        break;
    default:
        console.log("Mid week");
}