"use strict";
const button = document.querySelector("button");
button.addEventListener("click", () => {
    console.log("You clicked me!");
});
button.addEventListener("click", (event) => console.log("arrow Func ", event));
function add(n1, n2) {
    return n1 + n2;
}
const arrowAdd = (n1, n2) => {
    return n1 + n2;
};
const arrowAdd2 = (n1, n2 = 10) => n1 + n2;
console.log("add ", add(2, 6));
console.log("arrowAdd ", arrowAdd(2, 6));
console.log("arrowAdd2 ", arrowAdd2(2, 6));
const printOutput = (output) => console.log(output);
const printOutput2 = (output) => console.log(output);
printOutput("printOutput " + add(2, 6));
printOutput2("printOutput2 " + add(2, 6));
printOutput("default parameters " + arrowAdd2(2));
// spread operator
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Skiing"];
activeHobbies.push(...hobbies);
console.log("spread operator ", activeHobbies);
const person = {
    name: "Mohammad",
    age: 26,
};
const copiedPerson = Object.assign({}, person);
console.log("spread operator ", copiedPerson);
// rest parameters
const sum = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = sum(2, 5, 10, 20, 100, -30);
console.log('rest parameters: ', addedNumbers);
