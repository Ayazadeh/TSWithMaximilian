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
function countAndDescribe(element) {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = "Got 1 element.";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(['Sports', 'Cooking']));
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
console.log(extractAndConvert({ name: 'Mohammad' }, 'name'));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1)
            return;
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Mohammad');
textStorage.addItem('Max');
console.log('generic class1: ', textStorage.getItems());
textStorage.removeItem('Max');
console.log('generic class2: ', textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(1);
console.log('generic class3: ', numberStorage.getItems());
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const anotherNames = ['Mohammad', 'Max'];
