let globalVar = "global";

function outer() {
    let outerVar = "outer";

    function inner() {
        let innerVar = "inner";
        console.log(globalVar); // accessible
        console.log(outerVar);  // accessible (closure)
        console.log(innerVar);  // accessible
    }

    inner();
    // console.log(innerVar); // ReferenceError
}

outer();