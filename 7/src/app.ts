// it's better to name decorators with Uppercase

function Logger(logString: string) {
	console.log('LOGGER FACTORY (first decorator)');
	return function (constructor: Function) {
		console.log('first decorator');
		console.log(logString);
		console.log(constructor);
	};
}

function WithTemplate(template: string, hookId: string) {
	console.log('TEMPLATE FACTORY (second decorator)');
	return function(constructor: any) {
		console.log('second decorator');
		console.log('Rendering template');
		const hookEl = document.getElementById(hookId);
		const p = new constructor();
		if (hookEl) {
			hookEl.innerHTML = template;
			hookEl.querySelector('h1')!.innerText = p.name
		}
	}
}

@Logger('LOGGING - PERSON')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
	name = "Max";

	constructor() {
		console.log("Creating person object...");
	}
}

const person = new Person();
console.log(person);
