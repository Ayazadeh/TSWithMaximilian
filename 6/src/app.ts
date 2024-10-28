// Generic types

const names: Array<string> = ["test"]; // string[]
names[0].split(" "); // if we use <string>, we can use all string methods

const promise: Promise<string> = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("This is done!");
	}, 2000);
});

function merge(objA: object, objB: object) {
	return Object.assign(objA, objB);
}

console.log("merge: ", merge({ name: "Mohammad" }, { age: 26 }));

const mergedObj = merge({ name: "Max" }, { age: 30 });
// mergedObj.name // error

function newMerge<T extends object, U extends object>(objA: T, objB: U) {
	return Object.assign(objA, objB);
}

const newMergedObj = newMerge({ name: "Max" }, { age: 30 });

console.log(newMergedObj);
console.log(newMergedObj.age);

interface Lengthy {
	length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
	let descriptionText = "Got no value.";
	if (element.length === 1) {
		descriptionText = "Got 1 element.";
	} else if (element.length > 1) {
		descriptionText = "Got " + element.length + " elements.";
	}
	return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(['Sports', 'Cooking']));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
	return "Value: " + obj[key];
}

console.log(extractAndConvert({name: 'Mohammad'}, 'name'));

class DataStorage<T extends string | number | boolean> {
	private data: T[] = [];

	addItem(item: T) {
		this.data.push(item);
	}

	removeItem(item: T) {
		if (this.data.indexOf(item) === -1) return;
		this.data.splice(this.data.indexOf(item), 1);
	}

	getItems() {
		return [...this.data];
	}	
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Mohammad');
textStorage.addItem('Max');
console.log('generic class1: ', textStorage.getItems());
textStorage.removeItem('Max');
console.log('generic class2: ', textStorage.getItems()); 

const numberStorage = new DataStorage<number>();	
numberStorage.addItem(1);
console.log('generic class3: ', numberStorage.getItems());

// const objectStorage = new DataStorage<object>();
// const maxObj = {name: 'Max'};
// objectStorage.addItem({name: 'Mohammad'});
// objectStorage.addItem(maxObj);
// console.log('generic class4: ', objectStorage.getItems());
// objectStorage.removeItem(maxObj);
// console.log('generic class5: ', objectStorage.getItems());