// intersection types: allow us to combine other types

type Admin = {
	name: string;
	privileges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};

type ElevatedEmployee = Admin & Employee; // intersection type
// its like: interface ElevatedEmployee extends Admin, Employee {}

const e1: ElevatedEmployee = {
	name: "Mohammad",
	privileges: ["create-server"],
	startDate: new Date(),
};
console.log("intersection types: ", e1);

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // it'll be number

const uni: Universal = 10;
console.log("universal type: ", uni);

// End of intersection types

// type guards

// allows us to utilize the flexibility of union types gives us and still ensure that our code runs correctly at runtime
// we can use 'typeof' or 'in' or 'instanceof' for type guards
function add(a: Combinable, b: Combinable) {
	if (typeof a === "string" || typeof b === "string") {
		// type guard
		return a.toString() + b.toString();
	}
	return a + b;
}

type UnkknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnkknownEmployee) {
	console.log("-----------------");
	console.log("Name: " + emp.name);
	if ("privileges" in emp) {
		// type guard
		console.log("Privileges: " + emp.privileges);
	}
	if ("startDate" in emp) {
		// type guard
		console.log("Start Date: " + emp.startDate);
	}
}

printEmployeeInformation(e1);
printEmployeeInformation({ name: "Max", startDate: new Date() });

class Car {
	drive() {
		console.log("Driving...");
	}
}

class Truck {
	drive() {
		console.log("Driving a truck...");
	}

	loadCargo(amount: number) {
		console.log("Loading cargo ..." + amount);
	}
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
	console.log(">>>>>>>>");

	vehicle.drive();
	if (vehicle instanceof Truck) {
		// type guard
		vehicle.loadCargo(1000);
	}
}

useVehicle(v1);
useVehicle(v2);

// End type guards

// Discriminated unions
// that makes implementing type guards easier

interface Bird {
	type: "bird";
	flyingSpeed: number;
}

interface Horse {
	type: "horse";
	runningSpeed: number;
}

type animal = Bird | Horse;

function moveAnimal(animal: animal) {
	// if (animal instanceof Bird) // we can't use instanseof here because js doesn't know interfaces
	let speed;
	switch (animal.type) {
		case "bird":
			speed = animal.flyingSpeed;
			break;
		case "horse":
			speed = animal.runningSpeed;
			break;
	}
	console.log("<<<<<<<<<<<<<");
	console.log("Moving at speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

// type casting
// we can use it to tell typescript that a certain value is of a certain type

// const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;
const userInputElement = document.getElementById("user-input")! as HTMLInputElement; // alternative
userInputElement.value = "Hi there!";

const userInputElement2 = document.getElementById("user-input-2"); // alternative

if (userInputElement2) {
	(userInputElement2 as HTMLInputElement).value = "Hi there2!";
}

// index types
// allows us to create objects with dynamic keys

interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a character!' }
	[ key: string ]: string;
}

const errorBag: ErrorContainer = {
	email: "Not a valid email",
	username: "Must start with a character!",
	1: 'test',
	// test: 2, // error
};
console.log('----> index types 👇');
console.log('errorBag: ', errorBag);

// End index types

// function overloads
// allows us to create multiple function signatures for the same function

function newAdd(a: number, b: number): number;
function newAdd(a: string, b: string): string;
function newAdd(a: number, b: string): string;
function newAdd(a: string, b: number): string;
function newAdd(a: Combinable, b: Combinable) {
	if (typeof a === "string" || typeof b === "string") { // type guard
		return a.toString() + b.toString();
	}
	return a + b;
}

const result = newAdd("Mohammad", " Ayazadeh");
result.split(" "); // if we don't use function overloads, we can't use methods like split

const result2 = newAdd(10, ' Max');
result2.split(" ");

console.log('function overloads: 👇');
console.log('result: ', result);
console.log('result2: ', result2);

// End function overloads

// Optional chaining
// allows us to access properties of an object without checking if the object is null or undefined

const fetchedUserData = {
	id: "u1",
	name: "Mohammad",
	job: { title: "CEO", description: "My own company" }, 
};

console.log('optionanl chaining: 👇');
console.log('fetchedUserData: ', fetchedUserData);
console.log('fetchedUserData.job: ', fetchedUserData?.job);
console.log('fetchedUserData.job.title: ', fetchedUserData?.job?.title);

// End optional chaining

// Nullish Coalescing Operator
// allows us to provide a default value if a value is null or undefined

const userInput = 0;

const storedData = userInput ?? "DEFAULT"; // will be DEFAULT if userInput is null or undefined

console.log('nullish coalescing operator: 👇');
console.log('storedData: ', storedData);

// End nullish coalescing operator