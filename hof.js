const add = (a, b) => a + b;

const operate = (a, b, operation) => operation(a, b);

console.log(operate(5, 3, add));