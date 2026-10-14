let s1 = "double quotes";
let s2 = 'single quotes';
let s3 = `backticks ${s1}`; // template literal

console.log(s1.length);        // 13
console.log(s1[0]);            // "d"
console.log(s1.charAt(1));     // "o"
console.log(s1 + " " + s2);    // concatenation
console.log(`Interpolated: ${s1}`);