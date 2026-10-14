function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero");
    }
    return a / b;
}

try {
    divide(1, 0);
} catch (e) {
    console.log(e.name);    // "Error"
    console.log(e.message); // "Division by zero"
}

// Custom error class
class ValidationError extends Error {
    constructor(field) {
        super(`Invalid field: ${field}`);
        this.name = "ValidationError";
        this.field = field;
    }
}

try {
    throw new ValidationError("email");
} catch (e) {
    console.log(e.name, e.field);
}