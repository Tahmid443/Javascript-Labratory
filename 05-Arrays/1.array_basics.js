const arr = [1, 2, 3, 4, 5];
console.log(arr.length);      // 5
console.log(arr[0]);          // 1
console.log(arr[arr.length - 1]); // 5

arr.push(6);        // add to end
arr.unshift(0);     // add to front
arr.pop();          // remove from end
arr.shift();        // remove from front
console.log(arr);   // [1,2,3,4,5]

// Multidimensional
const matrix = [[1, 2], [3, 4]];
console.log(matrix[1][0]); // 3

// Array.from
console.log(Array.from("abc")); // ["a","b","c"]
console.log(Array.isArray(arr)); // true