// it's better to name decorators with Uppercase

function Logger(logString: string) {
	console.log("LOGGER FACTORY (first decorator)");
	return function (constructor: Function) {
		console.log("first decorator");
		console.log(logString);
		console.log(constructor);
	};
}

function WithTemplate(template: string, hookId: string) {
	console.log("TEMPLATE FACTORY (second decorator)");
	return function<T extends {new(...args: any[]): {name: string}}>(originalConstructor: T) {
		return class extends originalConstructor {
			constructor(...args: any[]) {
				super();
				console.log("second decorator");
				console.log("Rendering template");
				const hookEl = document.getElementById(hookId);
				if (hookEl) {
					hookEl.innerHTML = template;
					hookEl.querySelector("h1")!.innerText = this.name;
				}
			}
		};
	};
}

@Logger("LOGGING - PERSON")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
	name = "Mohammad Ayazadeh";

	constructor() {
		console.log("Creating person object...");
	}
}

const person = new Person();
console.log(person);

// ---

function Log(target: any, propertyName: string | Symbol) {
	console.log("---------------------");
	console.log("Property decorator!");
	console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
	console.log("---------------------");
	console.log("Accessor decorator!");
	console.log(target);
	console.log(name);
	console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
	console.log("---------------------");
	console.log("Method decorator!");
	console.log(target);
	console.log(name);
	console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
	console.log("---------------------");
	console.log("Parameter decorator!");
	console.log(target);
	console.log(name);
	console.log(position);
}

class Product {
	@Log // Property Decorator
	title: string;
	private _price: number;

	@Log2 // Accessor Decorator
	set price(val: number) {
		if (val > 0) {
			this._price = val;
		} else {
			throw new Error("Invalid price - should be positive!");
		}
	}

	constructor(t: string, p: number) {
		this.title = t;
		this._price = p;
	}

	@Log3 // Method Decorator
	getPriceWithText(@Log4 tax: number) {
		return this._price * (1 + tax);
	}
}
