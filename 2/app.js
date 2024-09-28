function add(n1, n2) {
    // we can don't specify the return type
    return n1 + n2;
}
function printResult(num) {
    // if we don't return anything we can specify void
    console.log("Result: " + num);
}
printResult(add(5, 12));
// function type
var combineValues;
combineValues = add;
// combineValues = printResult; // error
console.log(combineValues(8, 8));
