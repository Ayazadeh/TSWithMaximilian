// interface describe a structure of an object
// recommendation: use capitalize first letter for interface name

interface Greetable {
    name: string;

    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    age = 30;

    constructor(n: string) {
        this.name = n;
    }

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

let user1: Greetable;

user1 = new Person('Mohammad');

user1.greet('Hi there - I am');
console.log(user1);