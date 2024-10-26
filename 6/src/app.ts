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
