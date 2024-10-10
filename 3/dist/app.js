"use strict";
const button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log('You clicked me!');
});
button.addEventListener('click', event => console.log('arrow Func ', event));
function add(n1, n2) {
    return n1 + n2;
}
const arrowAdd = (n1, n2) => {
    return n1 + n2;
};
const arrowAdd2 = (n1, n2 = 10) => n1 + n2;
console.log('add ', add(2, 6));
console.log('arrowAdd ', arrowAdd(2, 6));
console.log('arrowAdd2 ', arrowAdd2(2, 6));
const printOutput = (output) => console.log(output);
const printOutput2 = output => console.log(output);
printOutput('printOutput ' + add(2, 6));
printOutput2('printOutput2 ' + add(2, 6));
printOutput('default parameters ' + arrowAdd2(2));
