"use strict";
const names = ["test"];
names[0].split(" ");
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is done!");
    }, 2000);
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
console.log("merge: ", merge({ name: "Mohammad" }, { age: 26 }));
const mergedObj = merge({ name: "Max" }, { age: 30 });
function newMerge(objA, objB) {
    return Object.assign(objA, objB);
}
const newMergedObj = newMerge({ name: "Max" }, { age: 30 });
console.log(newMergedObj);
console.log(newMergedObj.age);
