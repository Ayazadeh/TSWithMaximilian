// interface describe a structure of an object
// recommendation: use capitalize first letter for interface name

// inheritance in interfaces
interface Named {
	readonly name: string;
    outputName?: string; // optional property
}

// we can extend more than one interface by separating them by comma
// example: interface Greetable extends Named, AnotherInterface
interface Greetable extends Named {
	greet(phrase: string): void;
}

// we can implement more than one interface by separating them by comma
// example: class Person implements Greetable, AnotherInterface
class Person implements Greetable {
	name: string;
	age = 30;

	constructor(n: string) {
		this.name = n;
	}

	greet(phrase: string) {
		console.log(phrase + " " + this.name);
	}
}

let user1: Greetable;

user1 = new Person("Mohammad");
// user1.name = 'Max'; // error because name is readonly

user1.greet("Hi there - I am");
console.log(user1);

// type addFn = (a: number, b: number) => number;
// use interface instead of type alias
interface addFn {
	(a: number, b: number): number;
}

let add: addFn;

add = (n1: number, n2: number) => {
	return n1 + n2;
};
console.log('function interface: ', add(12, 30));
